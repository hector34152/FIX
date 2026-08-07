function expandirTabla(textoT,idDes, textoD, idTabla,idTitulo,idBotonRegresar) {
    const tabla = document.getElementById(idTabla);
    const titulo = document.getElementById(idTitulo);
    const DescripcionID = document.getElementById(idDes);
    const Descripcion = document.getElementById(textoD);
    const botonRegresar = document.getElementById(idBotonRegresar);

    tabla.classList.add('hidden');
    titulo.classList.remove('hidden');
    DescripcionID.classList.remove('hidden');
    titulo.textContent = textoT;
    DescripcionID.textContent = Descripcion.textContent;
    botonRegresar.classList.remove('hidden');
}

function regresarTabla(idBoton, idTabla, idTitulo, idDes,idBotonRegresar,divFoto) {
    const tabla = document.getElementById(idTabla);
    const titulo = document.getElementById(idTitulo);
    const descripcion = document.getElementById(idDes);
    const botonRegresar = document.getElementById(idBotonRegresar);
    const divFotos = document.getElementById(divFoto);

    tabla.classList.remove('hidden');
    titulo.classList.add('hidden');
    botonRegresar.classList.add('hidden');
    divFotos.innerHTML = '';
}

// ==========================================
// FUNCIONES AUXILIARES DE FORMATEO
// ==========================================

/**
 * Convierte 'AAAA-MM-DD' a 'DD/MM/AAAA'
 */
function formatearFecha(fechaStr) {
    if (!fechaStr || fechaStr.trim() === '') return '';
    if (fechaStr instanceof Date) {
        fechaStr = fechaStr.toISOString().split('T')[0];
    }
    const partes = fechaStr.split('-');
    if (partes.length !== 3) return fechaStr;
    const [year, month, day] = partes;
    return `${day}/${month}/${year}`;
}

/**
 * Convierte 'HH:MM' (24 hrs) a 'HH:MM AM/PM' (12 hrs)
 */
function formatearHora(horaStr) {
    if (!horaStr || horaStr.trim() === '') return '';
    const partes = horaStr.split(':');
    let horas = parseInt(partes[0], 10);
    const minutos = partes[1];
    
    if (isNaN(horas) || !minutos) return horaStr;
    
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12; // La hora 00 corresponde a las 12 AM
    
    const horasFormateadas = String(horas).padStart(2, '0');
    return `${horasFormateadas}:${minutos} ${ampm}`;
}

// ==========================================
// FUNCIÓN PRINCIPAL DE GENERACIÓN DE IMAGEN
// ==========================================

async function generar(a, botonReferencia) {
    const elemento = document.getElementById(a);
    
    if (!elemento) {
        console.error(`No se encontró el contenedor: ${a}`);
        alert("No se pudo encontrar el contenido a exportar.");
        return;
    }

    if (botonReferencia) botonReferencia.style.display = 'none';
    const reemplazos = [];

    // 0. PROCESAR label
    const labels = elemento.querySelectorAll('label');
    labels.forEach(label => {
        label.style.marginBottom = '1rem';
    });

    // 1. PROCESAR TEXTAREAS
    const textareas = elemento.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const divTemporal = document.createElement('div');
        const textoConSaltos = textarea.value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/\n/g, "<br>");
        
        divTemporal.innerHTML = textoConSaltos;
        divTemporal.style.display = 'block';
        divTemporal.style.whiteSpace = 'normal'; 
        divTemporal.style.wordBreak = 'break-word';
        divTemporal.style.boxSizing = 'border-box';
        
        const estiloOriginal = window.getComputedStyle(textarea);
        divTemporal.style.fontFamily = estiloOriginal.fontFamily;
        divTemporal.style.fontSize = estiloOriginal.fontSize;
        divTemporal.style.lineHeight = estiloOriginal.lineHeight; 
        divTemporal.style.color = estiloOriginal.color;
        divTemporal.style.padding = '0.25rem';
        divTemporal.style.border = 'none';
        divTemporal.style.borderRadius = estiloOriginal.borderRadius;
        divTemporal.style.backgroundColor = 'none' ;
        
        const dimTextarea = textarea.getBoundingClientRect();
        divTemporal.style.width = dimTextarea.width + 'px';
        divTemporal.style.minHeight = dimTextarea.height + 'px'; 
        
        textarea.parentNode.insertBefore(divTemporal, textarea);
        textarea.style.display = 'none';
        
        reemplazos.push({ original: textarea, temporal: divTemporal });
    });

    // 1.5. PROCESAR INPUTS (TEXT / NUMBER)
    const inputsComunes = elemento.querySelectorAll('input[type="number"], input[type="text"]:not(.date-box)');
    inputsComunes.forEach(input => {
        const padre = input.parentNode;
        const estiloPadre = window.getComputedStyle(padre);
        if (estiloPadre.position === 'static') {
            padre.style.position = 'relative';
        }

        const contenedorFalso = document.createElement('div');
        const estiloOriginal = window.getComputedStyle(input);
        const dimensiones = input.getBoundingClientRect();

        contenedorFalso.style.width = dimensiones.width + 'px';
        contenedorFalso.style.height = dimensiones.height + 'px';
        contenedorFalso.style.boxSizing = 'border-box';
        contenedorFalso.style.display = 'inline-block';
        contenedorFalso.style.position = 'relative';
        contenedorFalso.style.border = 'none';
        contenedorFalso.style.borderRadius = estiloOriginal.borderRadius;
        contenedorFalso.style.backgroundColor = 'none';
        contenedorFalso.style.marginTop = '0';
        contenedorFalso.style.marginBottom = 'auto';
        contenedorFalso.style.marginLeft = '0';
        contenedorFalso.style.marginRight = 'auto';

        const textoTemporal = document.createElement('span');
        textoTemporal.innerText = input.value || " ";
        
        textoTemporal.style.position = 'absolute';
        textoTemporal.style.top = '50%';
        textoTemporal.style.left = '50%';
        textoTemporal.style.transform = 'translate(-50%, -50%)';
        textoTemporal.style.whiteSpace = 'nowrap';
        
        textoTemporal.style.fontFamily = estiloOriginal.fontFamily;
        textoTemporal.style.fontSize = estiloOriginal.fontSize;
        textoTemporal.style.fontWeight = estiloOriginal.fontWeight;
        textoTemporal.style.color = estiloOriginal.color;

        contenedorFalso.appendChild(textoTemporal);
        padre.insertBefore(contenedorFalso, input);
        input.style.display = 'none';
        
        reemplazos.push({ original: input, temporal: contenedorFalso });
    });

    // 1.6 PROCESAR INPUTS RADIO
    const radios = elemento.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        const spanRadio = document.createElement('span');
        spanRadio.style.display = 'inline-block';
        spanRadio.style.width = '16px';
        spanRadio.style.height = '16px';
        spanRadio.style.borderRadius = '50%';
        spanRadio.style.border = '2px solid #374151';
        spanRadio.style.backgroundColor = radio.checked ? '#111827' : '#ffffff';
        
        radio.parentNode.insertBefore(spanRadio, radio);
        radio.style.display = 'none';
        reemplazos.push({ original: radio, temporal: spanRadio });
    });

    // 2. PROCESAR SELECTS
    const selects = elemento.querySelectorAll('select');
    selects.forEach(select => {
        const textoSeleccionado = select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : "";
        const spanTemporal = document.createElement('span');
        const estiloOriginal = window.getComputedStyle(select);
        const dimensiones = select.getBoundingClientRect();
        
        spanTemporal.innerText = textoSeleccionado;
        spanTemporal.style.fontFamily = estiloOriginal.fontFamily;
        spanTemporal.style.fontSize = estiloOriginal.fontSize;
        spanTemporal.style.color = estiloOriginal.color;
        spanTemporal.style.border = 'none';
        spanTemporal.style.borderRadius = estiloOriginal.borderRadius;
        spanTemporal.style.backgroundColor = 'none';
        
        spanTemporal.style.display = 'inline-flex';
        spanTemporal.style.alignItems = 'start';
        spanTemporal.style.justifyContent = 'start';
        spanTemporal.style.width = dimensiones.width + 'px';
        spanTemporal.style.height = (dimensiones.height - 2) + 'px';
        spanTemporal.style.boxSizing = 'border-box';
        spanTemporal.style.padding = '0';
        spanTemporal.style.marginTop = '0';
        spanTemporal.style.marginBottom = 'auto';

        select.parentNode.insertBefore(spanTemporal, select);
        select.style.display = 'none';
        reemplazos.push({ original: select, temporal: spanTemporal });
    });

    // 3. PROCESAR FECHAS E INPUTS DATETIME / TIME
    const inputsFechaHora = elemento.querySelectorAll('input[type="date"], input[type="time"]');
    inputsFechaHora.forEach(elementoFecha => {
        let valorRaw = elementoFecha.value || "";
        let textoFechaHora = " ";

        // Formateo según el tipo de input
        if (elementoFecha.type === 'date') {
            textoFechaHora = formatearFecha(valorRaw);
        } else if (elementoFecha.type === 'time') {
            textoFechaHora = formatearHora(valorRaw);
        } else {
            textoFechaHora = valorRaw;
        }

        const spanFechaTemporal = document.createElement('span');
        const estiloOriginal = window.getComputedStyle(elementoFecha);
        spanFechaTemporal.innerText = textoFechaHora || " ";        
        spanFechaTemporal.style.fontFamily = estiloOriginal.fontFamily;
        spanFechaTemporal.style.fontSize = estiloOriginal.fontSize;
        spanFechaTemporal.style.lineHeight = estiloOriginal.lineHeight; 
        spanFechaTemporal.style.color = estiloOriginal.color;
        spanFechaTemporal.style.padding = '0';
        const dimensiones = elementoFecha.getBoundingClientRect();
        spanFechaTemporal.style.width = dimensiones.width + 'px';
        spanFechaTemporal.style.height = dimensiones.height + 'px';
        spanFechaTemporal.style.display = 'inline-flex';
        spanFechaTemporal.style.alignItems = 'center';
        spanFechaTemporal.style.justifyContent = 'center';
        spanFechaTemporal.style.boxSizing = 'border-box';
        spanFechaTemporal.style.padding = '0';
        spanFechaTemporal.style.marginTop = '0';
        spanFechaTemporal.style.marginBottom = 'auto';

        elementoFecha.parentNode.insertBefore(spanFechaTemporal, elementoFecha);
        elementoFecha.style.display = 'none';
        reemplazos.push({ original: elementoFecha, temporal: spanFechaTemporal });
    });

    // 4. GENERAR EL CANVAS
    try {
        const canvas = await html2canvas(elemento, {
            scale: 4,           
            useCORS: true,      
            logging: false,     
            backgroundColor: '#ffffff',
            scrollY: -window.scrollY, 
            scrollX: -window.scrollX,
            windowWidth: document.documentElement.offsetWidth,
            windowHeight: document.documentElement.offsetHeight
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.download = `Reporte_${a}.jpg`;
        enlaceDescarga.href = imgData;
        enlaceDescarga.click();

    } catch (error) {
        console.error("Error al generar la imagen JPEG:", error);
        alert("Hubo un problema al generar la imagen del reporte.");
    } finally {
        reemplazos.forEach(item => {
            item.temporal.remove();
            item.original.style.display = ''; 
        });

        if (botonReferencia) botonReferencia.style.display = 'block';
    }
}

// ==========================================
// TABLAS, CÁLCULOS Y FUNCIONALIDADES DE PÁGINA
// ==========================================

// Denominaciones (MXN)
const denBilletes = [1000, 500, 200, 100, 50, 20];
const denMonedas = [10, 5, 2, 1, 0.5];

// Inicializar Fechas actuales
['arqFecha', 'recFecha', 'lopeFecha', 'cajasFecha', 'subFecha', 'gerFecha', 'actFecha'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.valueAsDate = new Date();
});

// Colocar hora actual
const ahora = new Date();
const horaStr = String(ahora.getHours()).padStart(2, '0') + ':' + String(ahora.getMinutes()).padStart(2, '0');
['arqHora', 'recHora', 'lopeHora', 'subHora', 'gerHora', 'actHora'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = horaStr;
});

// Generar dinámicamente tablas de arqueo y recepción
function construirTablas() {
    const tbodyBArqueo = document.getElementById('tbodyBilletesArqueo');
    if (tbodyBArqueo) {
        denBilletes.forEach(d => {
            tbodyBArqueo.innerHTML += `
                <tr class="border-b border-gray-100">
                    <td class="p-2 font-medium text-gray-700">$${d.toFixed(2)}</td>
                    <td class="p-1 text-center"><input type="number" id="cantArqB_${d}" value="0" min="0" oninput="calcularArqueo()" class="w-20 text-center rounded border border-gray-300 p-0.5"></td>
                    <td id="totArqB_${d}" class="p-2 text-right text-gray-600">$0.00</td>
                </tr>`;
        });
    }

    const tbodyMArqueo = document.getElementById('tbodyMonedasArqueo');
    if (tbodyMArqueo) {
        denMonedas.forEach(d => {
            tbodyMArqueo.innerHTML += `
                <tr class="border-b border-gray-100">
                    <td class="p-2 font-medium text-gray-700">$${d.toFixed(2)}</td>
                    <td class="p-1 text-center"><input type="number" id="cantArqM_${d}" value="0" min="0" oninput="calcularArqueo()" class="w-20 text-center rounded border border-gray-300 p-0.5"></td>
                    <td id="totArqM_${d}" class="p-2 text-right text-gray-600">$0.00</td>
                </tr>`;
        });
    }

    const tbodyBRec = document.getElementById('tbodyBilletesRec');
    if (tbodyBRec) {
        denBilletes.forEach(d => {
            tbodyBRec.innerHTML += `
                <tr class="border-b border-gray-100">
                    <td class="p-2 font-medium text-gray-700">$${d.toFixed(2)}</td>
                    <td class="p-1 text-center"><input type="number" id="cantRecB_${d}" value="0" min="0" oninput="calcularRecepcion()" class="w-20 text-center rounded border border-gray-300 p-0.5"></td>
                    <td id="totRecB_${d}" class="p-2 text-right text-gray-600">$0.00</td>
                </tr>`;
        });
    }

    const tbodyMRec = document.getElementById('tbodyMonedasRec');
    if (tbodyMRec) {
        denMonedas.forEach(d => {
            tbodyMRec.innerHTML += `
                <tr class="border-b border-gray-100">
                    <td class="p-2 font-medium text-gray-700">$${d.toFixed(2)}</td>
                    <td class="p-1 text-center"><input type="number" id="cantRecM_${d}" value="0" min="0" oninput="calcularRecepcion()" class="w-20 text-center rounded border border-gray-300 p-0.5"></td>
                    <td id="totRecM_${d}" class="p-2 text-right text-gray-600">$0.00</td>
                </tr>`;
        });
    }
}

function calcularArqueo() {
    let totalBilletes = 0;
    denBilletes.forEach(d => {
        const el = document.getElementById(`cantArqB_${d}`);
        if (el) {
            const cant = parseInt(el.value) || 0;
            const tot = cant * d;
            totalBilletes += tot;
            document.getElementById(`totArqB_${d}`).innerText = '$' + tot.toLocaleString('es-MX', {minimumFractionDigits: 2});
        }
    });
    if (document.getElementById('totalBilletesArqueo')) {
        document.getElementById('totalBilletesArqueo').innerText = '$' + totalBilletes.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    let totalMonedas = 0;
    denMonedas.forEach(d => {
        const el = document.getElementById(`cantArqM_${d}`);
        if (el) {
            const cant = parseInt(el.value) || 0;
            const tot = cant * d;
            totalMonedas += tot;
            document.getElementById(`totArqM_${d}`).innerText = '$' + tot.toLocaleString('es-MX', {minimumFractionDigits: 2});
        }
    });
    if (document.getElementById('totalMonedasArqueo')) {
        document.getElementById('totalMonedasArqueo').innerText = '$' + totalMonedas.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    const totalEfectivo = totalBilletes + totalMonedas;
    if (document.getElementById('lblTotalEfectivoArqueo')) {
        document.getElementById('lblTotalEfectivoArqueo').innerText = '$' + totalEfectivo.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    const fondoCajaEl = document.getElementById('arqFondoCaja');
    const fondoCaja = fondoCajaEl ? (parseFloat(fondoCajaEl.value) || 0) : 0;
    const totalDeclarar = totalEfectivo - fondoCaja;
    if (document.getElementById('lblTotalDeclararArqueo')) {
        document.getElementById('lblTotalDeclararArqueo').innerText = '$' + totalDeclarar.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    const sistemaEl = document.getElementById('arqSistema');
    const sistema = sistemaEl ? (parseFloat(sistemaEl.value) || 0) : 0;
    const diferencia = totalDeclarar - sistema;

    const lblDif = document.getElementById('lblDiferenciaArqueo');
    const divDif = document.getElementById('divDiferenciaArqueo');
    
    if (lblDif && divDif) {
        lblDif.innerText = (diferencia >= 0 ? '+' : '') + '$' + diferencia.toLocaleString('es-MX', {minimumFractionDigits: 2});
        if (Math.abs(diferencia) < 0.01) {
            divDif.className = "flex justify-between items-center p-2 rounded font-bold bg-green-100 text-green-800";
        } else if (diferencia < 0) {
            divDif.className = "flex justify-between items-center p-2 rounded font-bold bg-red-100 text-red-800";
        } else {
            divDif.className = "flex justify-between items-center p-2 rounded font-bold bg-blue-100 text-blue-800";
        }
    }
}

function calcularRecepcion() {
    let totalBilletes = 0;
    denBilletes.forEach(d => {
        const el = document.getElementById(`cantRecB_${d}`);
        if (el) {
            const cant = parseInt(el.value) || 0;
            const tot = cant * d;
            totalBilletes += tot;
            document.getElementById(`totRecB_${d}`).innerText = '$' + tot.toLocaleString('es-MX', {minimumFractionDigits: 2});
        }
    });
    if (document.getElementById('totalBilletesRec')) {
        document.getElementById('totalBilletesRec').innerText = '$' + totalBilletes.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    let totalMonedas = 0;
    denMonedas.forEach(d => {
        const el = document.getElementById(`cantRecM_${d}`);
        if (el) {
            const cant = parseInt(el.value) || 0;
            const tot = cant * d;
            totalMonedas += tot;
            document.getElementById(`totRecM_${d}`).innerText = '$' + tot.toLocaleString('es-MX', {minimumFractionDigits: 2});
        }
    });
    if (document.getElementById('totalMonedasRec')) {
        document.getElementById('totalMonedasRec').innerText = '$' + totalMonedas.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    const totalContado = totalBilletes + totalMonedas;
    if (document.getElementById('lblTotalEfectivoRec')) {
        document.getElementById('lblTotalEfectivoRec').innerText = '$' + totalContado.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    const montoEstablecidoEl = document.getElementById('recMontoFijo');
    const montoEstablecido = montoEstablecidoEl ? (parseFloat(montoEstablecidoEl.value) || 0) : 0;
    if (document.getElementById('lblMontoEstRec')) {
        document.getElementById('lblMontoEstRec').innerText = '$' + montoEstablecido.toLocaleString('es-MX', {minimumFractionDigits: 2});
    }

    const diferencia = totalContado - montoEstablecido;
    const lblDif = document.getElementById('lblDiferenciaRec');
    const divDif = document.getElementById('divDiferenciaRec');

    if (lblDif && divDif) {
        lblDif.innerText = (diferencia >= 0 ? '+' : '') + '$' + diferencia.toLocaleString('es-MX', {minimumFractionDigits: 2});
        if (Math.abs(diferencia) < 0.01) {
            divDif.className = "w-full flex justify-between items-center p-3 rounded font-black text-base bg-green-100 text-green-800";
        } else if (diferencia < 0) {
            divDif.className = "w-full flex justify-between items-center p-3 rounded font-black text-base bg-red-100 text-red-800";
        } else {
            divDif.className = "w-full flex justify-between items-center p-3 rounded font-black text-base bg-blue-100 text-blue-800";
        }
    }
}

// Manejador de pestañas y categorías
function switchTab(tab) {
    const tabs = {
        'arqueo': { btn: 'btnTabArqueo', groupBtn: 'btnGroupArqueos', sec: 'sectionArqueo' },
        'recepcion': { btn: 'btnTabRecepcion', groupBtn: 'btnGroupArqueos', sec: 'sectionRecepcion' },
        'cajas': { btn: 'btnTabCajas', groupBtn: 'btnGroupEvaluacion', sec: 'sectionCajas' },
        'LOPE': { btn: 'btnTabLOPE', groupBtn: 'btnGroupEvaluacion', sec: 'sectionLOPE' },
        'actividades': { btn: 'btnTabActividades', groupBtn: 'btnGroupEvaluacion', sec: 'sectionActividades' },
        'gerencia': { btn: 'btnTabGerencia', groupBtn: 'btnGroupChecklist', sec: 'sectionGerencia' },
        'subgerencia': { btn: 'btnTabSubgerencia', groupBtn: 'btnGroupChecklist', sec: 'sectionSubgerencia' }
    };

    const groupBtns = ['btnGroupArqueos', 'btnGroupEvaluacion', 'btnGroupChecklist'];

    // Restablecer estilos de grupos
    groupBtns.forEach(gId => {
        const gEl = document.getElementById(gId);
        if (gEl) {
            gEl.className = "font-semibold text-sm text-gray-500 hover:text-orange-600 flex items-center space-x-1 focus:outline-none";
        }
    });

    // Ocultar todas las secciones
    Object.keys(tabs).forEach(key => {
        const secEl = document.getElementById(tabs[key].sec);
        if (secEl) secEl.classList.add('hidden');
    });

    // Activar sección elegida y resaltar categoría activa
    if (tabs[tab]) {
        const activeSec = document.getElementById(tabs[tab].sec);
        const activeGroupBtn = document.getElementById(tabs[tab].groupBtn);

        if (activeSec) activeSec.classList.remove('hidden');
        if (activeGroupBtn) {
            activeGroupBtn.className = "font-extrabold text-sm text-orange-600 flex items-center space-x-1 focus:outline-none border-b-2 border-orange-600 pb-1";
        }
    }

    setTimeout(inicializarFirmas, 60);
}

// Firmas digitales
const pads = {};

function inicializarFirmas() {
    const configuracion = {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(30, 41, 59)'
    };

    const ids = ['ArqResp', 'ArqSup', 'RecEnt', 'RecRec'];

    ids.forEach(id => {
        const canvas = document.getElementById(`canvasFirma${id}`);
        if (canvas && canvas.offsetParent !== null) {
            const rect = canvas.getBoundingClientRect();
            if (canvas.width !== Math.floor(rect.width * window.devicePixelRatio)) {
                canvas.width = rect.width * window.devicePixelRatio;
                canvas.height = rect.height * window.devicePixelRatio;
                const ctx = canvas.getContext('2d');
                ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            }
            if (!pads[id]) {
                pads[id] = new SignaturePad(canvas, configuracion);
            }
        }
    });
}

function clearSignature(id) {
    if (pads[id]) pads[id].clear();
}

window.addEventListener('resize', () => {
    setTimeout(inicializarFirmas, 150);
});

function previsualizarImagen(input, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const divFoto = document.createElement('div');
            divFoto.className = 'relative border border-gray-200 rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'w-full h-full object-cover';

            const btnEliminar = document.createElement('button');
            btnEliminar.type = 'button';
            btnEliminar.innerHTML = '&times;';
            btnEliminar.className = 'no-print absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm shadow transition';
            btnEliminar.onclick = function() {
                divFoto.remove();
            };

            divFoto.appendChild(img);
            divFoto.appendChild(btnEliminar);
            contenedor.appendChild(divFoto);

            input.value = '';
        };

        reader.readAsDataURL(input.files[0]);
    }
}

construirTablas();
calcularArqueo();
calcularRecepcion();
switchTab('arqueo');
setTimeout(inicializarFirmas, 150);
