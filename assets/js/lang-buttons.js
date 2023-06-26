if(!lang){
    localStorage.setItem('lang', 'EN');
}

en.addEventListener('click', ()=>{
    alterLang('EN');
    location.reload();
})

pt.addEventListener('click', ()=>{
    alterLang('PT');
    location.reload();
})

alterLang(lang);

function alterLang(selectedLang){
    if(selectedLang === "EN"){
        en.classList.add("bg-slate-500");
        pt.classList.remove("bg-slate-500");
        localStorage.setItem('lang', 'EN');
    }else{
        pt.classList.add("bg-slate-500");
        en.classList.remove("bg-slate-500");
        localStorage.setItem('lang', 'PT');
    }
}