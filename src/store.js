import Vue from 'vue'
import Vuex from 'vuex'
import { db } from './main';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        records: [],
        pokemons: [],
        patients: [],
        recordsPerPatient: []
    },
    mutations: {
        fetchData(state) {
            fetch("https://pokeapi.co/api/v2/pokemon")
                .then(stream => stream.json())
                .then(data => {
                    data.results.forEach(pokemon => {
                        let item = {};
                        item.name = pokemon.name;
                        item.id = (pokemon.url.split('/'))[6]
                        item.imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + item.id + '.png'
                        state.pokemons.push(item);
                    })
                });
        },

        getPatients: state => {
            let patientsFb = [];
            db.collection('patients').onSnapshot((snapshot) => {
                snapshot.forEach(doc => {
                    patientsFb.push({ id: doc.id, type: doc.data().DocumentType, documento: doc.data().Document, nombre: doc.data().name, edad: doc.data().Edad })
                })
                console.log(patientsFb);
                state.patients = patientsFb;
            });
        },
        getRecords: state => {
            let recordsFb = [];
            db.collection('records').onSnapshot((snapshot) => {
                snapshot.forEach(doc => {
                    recordsFb.push({ id: doc.id, patientId: doc.data().patientId, desc: doc.data().descripcion })
                })
                console.log(recordsFb);
                state.records = recordsFb;
            })
        }
    },
    actions: {

    },
    getters: {
        patientById: (state) => (id) => {
            return state.patients.find(patient => patient.documento == id)
        },
        getRecordsPerPatient: (state) => (document) => {
            return state.records.filter(record => record.patientId == document)
        },
        getRecordsPerPatientCount: (state, getters) => {
            return getters.getRecordsPerPatient.length
          }

    }
})