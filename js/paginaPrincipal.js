const btnFiltros = document.querySelector('.btn-filtros')

btnFiltros.addEventListener('click', function() {
    document.getElementById('filtros').classList.toggle('active');
})
const btnSesiones = document.querySelector('.btnBoleta')

btnSesiones.addEventListener('click', function() {
    document.getElementById('lista-sesion').classList.toggle('sexo');
})