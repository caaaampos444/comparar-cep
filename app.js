async function fun() {
   const JSONBase = {
       cep: '06622-300',
       logradouro: 'Rua Guarulhos',
       complemento: '',
       unidade: '',
       bairro: 'Parque Santa Tereza',
       localidade: 'Jandira',
       uf: 'SP',
       estado: 'São Paulo',
       regiao: 'Sudeste',
       ibge: '3525003',
       gia: '3980',
       ddd: '11',
       siafi: '6601'
   }
   const ceps = [
       // CHACARAS DO PEROBA
       '06648020',
       '06648100',
       // NOVA HIGIENOPOLIS
       '06642090',
       '06642180',
       // PARQUE SANTA TEREZA
       '06622290',
       //'06622300'
       '06622310'
   ]
   const cepsAceitos = [];
   const promises = ceps.map(async (cep) => {
       const url = `https://viacep.com.br/ws/${cep}/json/`
       const obj = await fetch(url)
       const json = await obj.json()
       if (json.bairro.toUpperCase() === JSONBase.bairro.toUpperCase())
           cepsAceitos.push(cep)
   })
   await Promise.all(promises);
   console.log(cepsAceitos);
}


fun();
