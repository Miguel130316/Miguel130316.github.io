const directoryData = [
    {id: 1, areaName: "Subsecretaría de la Función Pública", acronym: "SSFP", owner: "Thalía Concepción Lagunas Aragón", title: "Titular de la Subsecretaria de la Función Pública", email: "thalia.lagunas@funcionpublica.gob.mx", number: "5536881100", extension: "Maria Laura Castelazo Diaz Leal", linkName: "Directora de Enlace para la Atención de Asuntos en Materia de Transparencia y Acceso a la Información", linkPosition: "laura_castelazo@hacienda.gob.mx", linkEmail: "Ext. 8 11 60"},
    {id: 2, areaName: "Dirección General de Transparencia y Gobierno Abierto", acronym: "DGTGA", owner: "Grethel Pilgram Santos", title: "Directora General de Transparencia y Gobierno Abierto", email: "grethel.pilgram@funcionpublica.gob.mx", number: "1052", extension: "1.Eduardo Vargas Ortiz 2.Erika Torres Godínez 3.Andrea Mondragón Reyes", linkName: "1.Director de Gobierno Abierto 2.Subdirectora de Gobierno Abierto 3.Subdirectora de Gestión de Solicitudes de Acceso a la Información ", linkPosition: "evargas@funcionpublica.gob.mx  erika.torres@funcionpublica.gob.mx  andrea.mondragon@funcionpublica.gob.mx", linkEma: "1023, 1385 y 1523"},
    {id: 3, areaName: "Unidad de Administración y Finanzas", acronym: "UAF", owner: "Mtra. Ana Liza Gómez Torres", title: "Titular de la Unidad de Administración y Finanzas", email: "analiza.gomez@funcionpublica.gob.mx", number: "5000", extension: "Guadalupe Esperanza Arteaga Torres", linkName: "Subdirectora de Análisis", linkPosition: "guadalupe.arteaga@funcionpublica.gob.mx", linkEmail: "5300"},
    {id: 4, areaName: "Dirección General de Programación y Presupuesto", acronym: "DGPyP", owner: "Alma J. Ramírez Moctezuma", title: "Directora General de Programación y Presupuesto", email: "alma.ramirez@funcionpublica.gob.mx", number: "5004", extension: "Rosa María Gutiérrez Hernández", linkName: "Directora de Análisis Programático e Integración Presupuestal", linkPosition: "rosa.gutierrez@funcionpublica.gob.mx", linkEmail: "5138"},
    {id: 5, areaName: "Dirección General de Recursos Humanos", acronym: "DGRH", owner: "Guillermo G. González Ugarte", title: "Director General de Recursos Humanos", email: "guillermo.gonzalez@funcionpublica.gob.mx", number: "5002", extension: "1.Jorge Luis Domínguez Saliá 2.Ana Karen Paniagua Arciga", linkName: "1.Director de Relaciones Laborales, Transparencia y Servicio Profesional de Carrera 2.Analista de Relaciones Laborales y Servicios", linkPosition: "jorge.dominguez@funcionpublica.gob.mx  apaniagua@funcionpublica.gob.mx", linkEmail: "5817,5350"},
    {id: 6, areaName: "Dirección General de Recursos Materiales y Servicios Generales", acronym: "DGRMSG", owner: "María de la Luz Padilla Díaz", title: "Directora General de Recursos Materiales y Servicios Generales", email: "maria.padilla@funcionpublica.gob.mx", number: "5009", extension: "1.Ambrosio Rene Oliva Delgado 2.Aida Camacho Guerrero", linkName: "1.Director Planeación y Adquisiciones 2.Subdirectora de Adquisiciones", linkPosition: "ambrosio.oliva@funcionpublica.gob.mx  aida.camacho@funcionpublica.gob.mx", linkEmail: "5031,5443"},
    {id: 7, areaName: "Coordinación General de Combate a la Impunidad", acronym: "CGCI", owner: "Lic. Efraín Álvarez Caborno Ojeda", title: "Coordinador General de Combate a la Impunidad", email: "efrain.alvarez@funcionpublica.gob.mx", number: "2003", extension: "Alejandro Balderas Camacho",linkName: "Director de Análisis", linkPosition: "a.camacho@funcionpublica.gob.mx", linkEmail: "2054"},
    {id: 8, areaName: "Unidad Sustanciadora y Resolutora", acronym: "USR", owner: "Katia Karina Rodríguez Ramos", title: "Titular de la Unidad Substanciadora y Resolutora", email: "katia.rodriguez@funcionpublica.gob.mx", number: "2021", extension: "Blanca Estela Mejía Espíndola", linkName: "Enlace de Transparencia", linkPosition: "blanca.mejia@funcionpublica.gob.mx", linkEmail: "3488"},
    {id: 9, areaName: "Unidad Investigadora", acronym: "CDAC", owner: "Claudia Elizabeth Arriaga Sánchez", title: "Coordinadora de Denuncias y Atención Ciudadana", email: "claudia.arriaga@funcionpublica.gob.mx", number: "2051", extension: "2051", linkName: "", linkPosition: "", linkEmail: ""},
    {id: 10, areaName: "Coordinación General de Fiscalización", acronym: "CGF", owner: "Eduardo Gurza Curiel", title: "Coordinador General de Fiscalización", email: "eduardo.gurza@funcionpublica.gob.mx", number: "3015", extension: "Julio Vázquez Mata", linkName: "Director de Planeación y Supervisión de Auditoría a la Operación Regional", linkPosition: "julio.vazquez@funcionpublica.gob.mx", linkEmail: "2255"},
    {id: 11, areaName: "Unidad de Auditoría Gubernamental", acronym: "UAG", owner: "Omar González Vera", title: "Jefe de la Unidad de Auditoría Gubernamental", email: "omar.gonzalez@funcionpublica.gob.mx", number: "3002", extension: "Fernando Garcés García", linkName: "Director de Seguimiento de Responsabilidades a la Operación Regional", linkPosition: "fgarces@funcionpublica.gob.mx", linkEmail: "3093"},
    {id: 12, areaName: "Unidad de Auditoría a Contrataciones Públicas", acronym: "UACP", owner: "Luis Alberto Ramos Padilla", title: "Jefe de la Unidad de Auditoría a Contrataciones Públicas", email: "luis.ramos@funcionpublica.gob.mx", number: "3045", extension: "Esperanza Abad García", linkName: "Directora de Control Presupuestal, Capacitación y Desarrollo de Auditoría", linkPosition: "eabad@funcionpublica.gob.mx", linkEmail: "3116"},
    {id: 13, areaName: "Unidad de Planeación y Fiscalización del Patrimonio Público Federal", acronym: "UPFPPF", owner: "José Miguel Macías Fernández", title: "Jefe de la Unidad de Planeación y Fiscalización del Patrimonio Público Federal", email: "jose.macias@funcionpublica.gob.mx", number: "3014", extension: "Gabriela Montes de Oca", linkName: "Directora de Fiscalización del Patrimonio Público Federal", linkPosition: "gmontesdeoca@funcionpublica.gob.mx", linkEmail: "4386"},
    {id: 14, areaName: "Unidad de Asuntos Jurídicos", acronym: "UAJ", owner: "Manuel García Garfias", title: "Jefe de la Unidad de Asuntos Jurídicos", email: "manuel.garcia@funcionpublica.gob.mx", number: "1001", extension: "Héctor Manuel Martínez Rodríguez", linkName: "Director Normativo", linkPosition: "hmartinez@funcionpublica.gob.mx", linkEmail: "1084"},
    {id: 15, areaName: "Órgano Interno de Control SFP", acronym: "OIC - SFP", owner: "Jorge Pedro Castolo Domínguez", title: "Titular del organo Interno de Control de la Secretaria de la Funcion Publica", email: "jorgepedrocastolo@funcionpublica.gob.mx", number: "1030", extension: "Carlos Carrera Guerrero", linkName: "Títular del Área de Control Interno", linkPosition: "ccarrera@funcionpublica.gob.mx", linkEmail: "1213"},
    {id: 16, areaName: "Dirección General de Comunicación Social", acronym: "DGCS", owner: "Raymundo Alva Huitrón", title: "Director General de Comunicación Social", email: "raymundo.alva@funcionpublica.gob.mx", number: "1018", extension: "Rodolfo Hernández Jiménez", linkName: "Director de Información", linkPosition: "rodolfo.hernandez@funcionpublica.gob.mx", linkEmail: "1445"},
    {id: 17, areaName: "Coordinación General de Vinculación con la Sociedad Civil", acronym: "CGVSC", owner: "Dálida Cleotilde Acosta Pimentel", title: "Coordinadora General de Vinculación con la Sociedad", email: "dalida.acosta@funcionpublica.gob.mx", number: "3023", extension: "Inés Guadalupe Mozo Ruiz ", linkName: "Subdirectora de Proyectos", linkPosition: "ines.mozo@funcionpublica.gob.mx", linkEmail: "1381"},
    {id: 18, areaName: "Coordinación de Gobierno Eficaz y Probidad", acronym: "CGEP", owner: "José Luis Chávez Delgado", title: "Coordinación de Gobierno Eficaz y Probidad", email: "jose.chavez@funcionpublica.gob.mx", number: "3001", extension: "Karina Alejandra Cuevas Hernández", linkName: "Directora de Mejora de la Gestión y Enlace de Transparencia", linkPosition: "kcuevas@funcionpublica.gob.mx", linkEmail: "4333"},
    {id: 19, areaName: "Unidad de Políticas de Recursos Humanos de la Administración Pública Federal", acronym: "UPRH APF", owner: "Jaime Arturo Larrazabal Escarraga", title: "Jefe de la Unidad de Políticas de Recursos Humanos de la Administración Pública Federal", email: "jaime.larrazabal@funcionpublica.gob.mx", number: "4034", extension: "Vicente Olguín Spiritu", linkName: "Coordinador de Planeación y Políticas de Recursos Humanos", linkPosition: "vicente.olguin@funcionpublica.gob.mx", linkEmail: "4403"},
    
    // Add more data as needed
];

const resultsPerPage = 9;
let currentPage = 1;
let filteredData = [...directoryData];

document.addEventListener('DOMContentLoaded', () => {
    loadTableData(filteredData);
    updatePageIndicator();
    updateResultCount();
});

function loadTableData(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const pageData = data.slice(start, end);

    pageData.forEach((item) => {
        const row = document.createElement('tr');
        
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
}

function searchFunction() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    filteredData = directoryData.filter(item => {
        return item.areaName.toLowerCase().includes(input) ||
               item.owner.toLowerCase().includes(input) ||
               item.acronym.toLowerCase().includes(input) ||
               item.title.toLowerCase().includes(input) ||
               item.id.toString().toLowerCase().includes(input);
    });

    currentPage = 1;
    loadTableData(filteredData);
    updatePageIndicator();
    updateResultCount();
}

function updatePageIndicator() {
    const pageIndicator = document.getElementById('pageIndicator');
    pageIndicator.textContent = `Pagina ${currentPage}`;
}

function updateResultCount() {
    const resultCount = document.getElementById('resultCount');
    resultCount.textContent = `Resultados encontrados: ${filteredData.length}`;
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        loadTableData(filteredData);
        updatePageIndicator();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredData.length / resultsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        loadTableData(filteredData);
        updatePageIndicator();
    }
}

