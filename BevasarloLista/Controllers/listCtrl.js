function addTerm(){
 
    let kat = document.querySelector('#kat');
    let term = document.querySelector('#term');
    let db = document.querySelector('#db');
    let egyseg = document.querySelector('#egyseg');
    let ossz = document.querySelector('#ossz');


    if (kat.value == "" || term.value == "" || db.value == 0 || egyseg.value == 0 || ossz.value == 0){
        showMessage("Nem adtál meg minden adatot!");
    }
    else{
        axios.get(`${serverURL}/mock_data/userID/eq/${loggedUser.ID}`).then(res=>{
            let vane = false;
            let upID = -1;
            res.data.forEach(item => {
                if (item.date.split('T')[0] == date.value){
                    vane = true;
                    upID = item.ID;
                    return;
                }
            });
            if(vane){
                let data = {
                    steps : steps.value
                }
                axios.patch(`${serverURL}/steps/ID/eq/${upID}`, data).then((res)=>{
                    alert('A lépésszám módosítva!');
                    date.value = null;
                    steps.value = 0;
                });
            }
            else{
                let data = {
                    userID : loggedUser.ID,
                    date : date.value,  
                    steps : steps.value
                }
 
                axios.post(`${serverURL}/steps`, data).then((res)=>{
                    alert('A lépésszám rögzítve!');
                    date.value = null;
                    steps.value = 0;
                });
            }
        })
    }
}