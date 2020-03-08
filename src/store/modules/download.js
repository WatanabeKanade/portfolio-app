import firebase from "firebase/app";
import "firebase/firestore";


const state = {
  monochromeItems: {},
  colorItems: {}
}

const actions = {
  downloadItems({ state }, itemType) {
    const db = firebase.firestore();
    db.collection(itemType)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (itemType === 'monochromes') {
            if (!state.monochromeItems[doc.id]) {
              state.monochromeItems[doc.id] = doc.data().imageUrl
            }
          } else {
            if (!state.colorItems[doc.id]) {
              state.colorItems[doc.id] = doc.data().imageUrl
            }
          }
        });
      });
  },
  async addMonochromeItems({ dispatch }) {
    await dispatch('downloadItems', 'monochromes');
  },
  async addColorItems({ dispatch }) {
    await dispatch('downloadItems', 'colors');
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
  actions,
  getters
}