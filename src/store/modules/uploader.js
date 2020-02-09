import firebase from "firebase/app";
import "firebase/firestore";


const state = {
  monochromeItems: {},
  colorItems: {}
}

const mutations = {
  addMonochromeItems(state) {
    const db = firebase.firestore();
    db.collection("monochromes")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (!state.monochromeItems[doc.id]) {
            state.monochromeItems[doc.id] = doc.data().imageUrl
          }
        });
      });
  },
  addColorItems(state) {
    const db = firebase.firestore();
    db.collection("colors")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (!state.colorItems[doc.id]) {
            state.colorItems[doc.id] = doc.data().imageUrl
          }
        });
      });
  }
}

const actions = {
  addMonochromeItems: ({ commit }) => {
    commit('addMonochromeItems');
  },
  addColorItems: ({ commit }) => {
    commit('addColorItems');
  }
}

const getters = {
  currentMonochromeItems: state => {
    return state.monochromeItems
  },
  currentColorItems: state => {
    return state.colorItems
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}