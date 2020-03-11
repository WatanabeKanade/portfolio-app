import firebase from "firebase/app";
import "firebase/firestore";


const state = {
  monochromeItems: { "first_photo": "https://firebasestorage.googleapis.com/v0/b/portfolio-app-9ccdd.appspot.com/o/photos%2Fmonochromes%2FF329895C-34A4-4EF0-89BA-5D7F915830CF.jpeg?alt=media&token=3c865b3e-877c-4afb-a120-6ce1db51205f" },
  colorItems: { "first_photo": "https://firebasestorage.googleapis.com/v0/b/portfolio-app-9ccdd.appspot.com/o/photos%2Fcolors%2Fcolor_2019-3.jpg?alt=media&token=15a2bb70-7baf-4161-ac8b-6a7e5ca9df1f" }
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