import firebase from './index.js';

const writeData = (data) => {
  return new Promise((resolve, reject)=>{
    const date = new Date();
    data.date = date.toLocaleDateString();
    firebase.database().ref('data/').push(data)
    .then(()=>{ 
      firebase.database().ref('log/').push({item : 'menambahakan item : ' + data.judul, date : date.toLocaleDateString() })
      resolve(true)
    }).catch(()=>{
      resolve(false) });
  })
};
const deleteData = (data, judul, url) => {
    return new Promise((resolve, reject) => {
      if (data) {
        const storageRef = firebase.storage().refFromURL(url);
        storageRef.delete().then(()=>{
          firebase.database().ref(`data/${data}/`).remove()
          .then(()=>{ 
            const date = new Date();
            firebase.database().ref('log/').push({item : 'menghapus item : ' + judul, date : date.toLocaleDateString() })
            resolve(true)
          })
          .catch(()=>{ 
            resolve(false) 
          });
        }).catch(()=>{reject(false)}); 
      }
  })
}
const uploadImage = (baseUrl) => {
  return new Promise((resolve, reject) => {
    const storageRef = firebase.storage().ref();
    const temptype = baseUrl.split(';');
    const typefile = temptype[0].split('/');
    const date = new Date();
    const filename = date.getTime();
    var uploadTask = storageRef.child(`images/${filename}.${typefile[1]}`).putString(baseUrl, 'data_url');
    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        resolve(downloadURL);
      })
    })
  })
};
const readData =  (category, data1) => {
  return new Promise((resolve, reject) => {
    const bacaData = [];
    firebase.database().ref('data/').once('value', (snapshot) => {
        snapshot.forEach(childSnapshot => {
          const { judul, indikasi, hewan, sumber, deskripsi, jenis, img, date } = childSnapshot.val();
          const temp1 = {
              id : childSnapshot.key,
              judul : judul,
              indikasi : indikasi,
              hewan : hewan,
              sumber: sumber,
              deskripsi : deskripsi,
              img : img,
              jenis : jenis,
              date : date,
          }
          // eslint-disable-next-line eqeqeq
          if(temp1.jenis.toLowerCase().indexOf(category)==!-1){
            bacaData.push(temp1);
          }
        })
        resolve(bacaData);
    })
  })
}

const readHistory = () => {
  return new Promise((resolve, reject) => {
    const bacaData = [];
    firebase.database().ref('log/').once('value', (snapshot) => {
        snapshot.forEach(childSnapshot => {
          const { item, date } = childSnapshot.val();
          const temp1 = {
              date : date,
              item : item
          }
          bacaData.push(temp1);
        })
        resolve(bacaData);
    })
  })
}
const readSaran = () => {
  return new Promise((resolve, reject) => {
    const bacaData = [];
    firebase.database().ref('saran/').once('value', (snapshot) => {
        snapshot.forEach(childSnapshot => {
          const { nama, emailTrue, kritik, judul, date } = childSnapshot.val();
          const temp1 = {
              date : date,
              nama : nama,
              email : emailTrue,
              kritik : kritik,
              judul : judul,
          }
          bacaData.push(temp1);
        })
        resolve(bacaData);
    })
  })
}

export { writeData, readData, uploadImage, deleteData, readHistory, readSaran };