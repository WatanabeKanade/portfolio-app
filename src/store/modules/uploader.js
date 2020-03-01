import firebase from "firebase/app";
import "firebase/firestore";


const state = {
  monochromeItems: { "first_photo": "https://firebasestorage.googleapis.com/v0/b/portfolio-app-9ccdd.appspot.com/o/photos%2Fmonochromes%2F02DCAF46-6CD3-496C-AAD3-F910EFF0463C.jpeg?alt=media&token=2975f8b3-1683-4857-999b-2e0206802f8a" },
  colorItems: { "first_photo": "https://firebasestorage.googleapis.com/v0/b/portfolio-app-9ccdd.appspot.com/o/photos%2Fcolors%2F4F1794F0-C2E4-413B-B012-6E346BF82009.jpeg?alt=media&token=511edbb5-c74a-458c-93f7-768321a73437" }
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