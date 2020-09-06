import Vue from 'vue'
import Vuex from 'vuex'
import { db, fb } from './main';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        records: [],
        patients: [],
        recordsPerPatient: [],
        imagesUrl: []
    },
    mutations: {
        getPatients: state => {
            let patientsFb = [];
            let date = new Date();
            var year = date.getFullYear();
            db.collection('patients').onSnapshot((snapshot) => {
                snapshot.forEach(doc => {
                    patientsFb.push({ id: doc.id, type: doc.data().documentType, document: doc.data().document, name: doc.data().name, age: (year - doc.data().birthdate.split('/')[0]), photo: doc.data().photo})
                })
                console.log(patientsFb);
                state.patients = patientsFb;
            });
        },
        getRecords: state => {

            db.collection('records').onSnapshot((snapshot) => {
                let recordsFb = [];
                snapshot.forEach(doc => {
                    recordsFb.push({ id: doc.id, patientId: doc.data().patientId, title: doc.data().title, images: doc.data().images })
                })
                console.log('recordsFB', recordsFb);
                state.records = recordsFb;
            })
        },
    },
    actions: {

    },
    getters: {
        patientById: (state) => (id) => {
            return state.patients.find(patient => patient.document == id)
        },
        getRecordsPerPatient: (state) => (document) => {
            return state.records.filter(record => record.patientId == document)
        },
        getRecordsPerPatientCount: (state, getters) => {
            return getters.getRecordsPerPatient.length
        },
        getFolderById: (state) => (folderId) => {
            return state.records.find(record => record.id == folderId)
        }

    }
})