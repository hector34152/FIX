// ==========================================
// MANTENIMIENTO Y CONTROL DE PESTAÑAS (TOUCH FRIENDLY)
// ==========================================

function toggleDropdown(dropId) {
    const drops = document.querySelectorAll('.nav-dropdown');
    drops.forEach(d => {
        if (d.id === dropId) {
            d.classList.toggle('hidden');
        } else {
            d.classList.add('hidden');
        }
    });
}

function selectTab(tabName) {
    switchTab(tabName);
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.add('hidden'));
}

function switchTab(tab) {
    const secciones = [
        'sectionArqueo', 
        'sectionRecepcion', 
        'sectionLOPE', 
        'sectionCajas', 
        'sectionSubgerencia', 
        'sectionGerencia', 
        'sectionActividades'
    ];

    secciones.forEach(id => {
        const sec = document.getElementById(id);
        if (sec) sec.classList.add('hidden');
    });

    const mapaSecciones = {
        'arqueo': 'sectionArqueo',
        'recepcion': 'sectionRecepcion',
        'LOPE': 'sectionLOPE',
        'cajas': 'sectionCajas',
        'subgerencia': 'sectionSubgerencia',
        'gerencia': 'sectionGerencia',
        'actividades': 'sectionActividades'
    };

    const objetivo = mapaSecciones[tab];
    if (objetivo) {
        const el = document.getElementById(objetivo);
        if (el) el.classList.remove('hidden');
    }

    // Recalcular dimensiones de canvases de firma en vistas recién visibles
    setTimeout(resizeCanvases, 50);
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.group')) {
        document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.add('hidden'));
    }
});

// ==========================================
// FUNCIONES EXPANDIR Y REGRESAR TABLA
// ==========================================

function expandirTabla(textoT, idDes, textoD, idTabla, idTitulo, idBotonRegresar) {
    const tabla = document.getElementById(idTabla);
    const titulo = document.getElementById(idTitulo);
    const descripcion = document.getElementById(idDes);
    const botonRegresar = document.getElementById(idBotonRegresar);
    const textoDescripcion = document.getElementById(textoD);

    if (tabla) tabla.classList.add('hidden');
    if (titulo) {
        titulo.classList.remove('hidden');
        titulo.textContent = textoT;
    }
    if (descripcion) {
        descripcion.classList.remove('hidden');
        if (textoDescripcion) descripcion.textContent = textoDescripcion.textContent;
    }
    if (botonRegresar) botonRegresar.classList.remove('hidden');
}

function regresarTabla(idBoton, idTabla, idTitulo, idDes, idBotonRegresar, divFoto, idDesTitulo) {
    const tabla = document.getElementById(idTabla);
    const titulo = document.getElementById(idTitulo);
    const tituloD = document.getElementById(idDesTitulo);
    const descripcion = document.getElementById(idDes);
    const botonRegresar = document.getElementById(idBotonRegresar);
    const divFotos = document.getElementById(divFoto);

    if (tabla) tabla.classList.remove('hidden');
    if (titulo) titulo.classList.add('hidden');
    if (tituloD) tituloD.classList.add('hidden');
    if (descripcion) descripcion.classList.add('hidden');
    if (botonRegresar) botonRegresar.classList.add('hidden');
    if (divFotos) divFotos.innerHTML = '';
}

// ==========================================
// FUNCIONES AUXILIARES DE FORMATEO
// ==========================================

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

function formatearHora(horaStr) {
    if (!horaStr || horaStr.trim() === '') return '';
    const partes = horaStr.split(':');
    let horas = parseInt(partes[0], 10);
    const minutos = partes[1];
    
    if (isNaN(horas) || !minutos) return horaStr;
    
    const ampm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12;
    horas = horas ? horas : 12;
    
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

    // 0. PROCESAR LABELS
    const labels = elemento.querySelectorAll('label');
    labels.forEach(label => {
        label.style.marginBottom = '0.5rem';
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
        divTemporal.style.border = estiloOriginal.border;
        divTemporal.style.borderRadius = estiloOriginal.borderRadius;
        divTemporal.style.backgroundColor = estiloOriginal.backgroundColor;
        
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
        contenedorFalso.style.borderRadius = 'none';
        contenedorFalso.style.backgroundColor = 'none';
        contenedorFalso.style.marginTop = '0';
        contenedorFalso.style.marginBottom = 'auto';
        contenedorFalso.style.marginLeft = 'auto';
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
        spanTemporal.style.border = estiloOriginal.border;
        spanTemporal.style.borderRadius = estiloOriginal.borderRadius;
        spanTemporal.style.backgroundColor = estiloOriginal.backgroundColor;
        
        spanTemporal.style.display = 'inline-flex';
        spanTemporal.style.alignItems = 'center';
        spanTemporal.style.justifyContent = 'center';
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
            scale: 5,           
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
// DENOMINACIONES, CÁLCULOS Y CANVAS
// ==========================================

const denBilletes = [1000, 500, 200, 100, 50, 20];
const denMonedas = [10, 5, 2, 1, 0.5];
const padMap = {};

function resizeCanvases() {
    Object.keys(padMap).forEach(key => {
        const canvas = document.getElementById(`canvasFirma${key}`);
        if (canvas) {
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            const data = padMap[key].toData();
            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;
            canvas.getContext("2d").scale(ratio, ratio);
            padMap[key].fromData(data);
        }
    });
}

window.addEventListener("resize", resizeCanvases);

function inicializarFirmas() {
    ['ArqResp', 'ArqSup', 'RecEnt', 'RecRec'].forEach(key => {
        const canvas = document.getElementById(`canvasFirma${key}`);
        if (canvas) {
            padMap[key] = new SignaturePad(canvas, {
                backgroundColor: 'rgba(255, 255, 255, 0)',
                penColor: 'rgb(0, 0, 0)'
            });
        }
    });
    resizeCanvases();
}

function clearSignature(key) {
    if (padMap[key]) {
        padMap[key].clear();
    }
}

function previsualizarImagen(input, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const div = document.createElement('div');
            div.className = 'relative group border rounded p-1 bg-gray-50';
            div.innerHTML = `
                <img src="${e.target.result}" class="w-full h-32 object-cover rounded">
                <button type="button" onclick="this.parentElement.remove()" class="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs no-print hover:bg-red-700">
                    ✕
                </button>
            `;
            contenedor.appendChild(div);
            input.value = '';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function calcularArqueo() {
    let totalBilletes = 0;
    denBilletes.forEach(d => {
        const cant = parseFloat(document.getElementById(`cantArqB_${d}`)?.value || 0);
        const sub = cant * d;
        totalBilletes += sub;
        const lbl = document.getElementById(`totArqB_${d}`);
        if (lbl) lbl.innerText = `$${sub.toFixed(2)}`;
    });

    let totalMonedas = 0;
    denMonedas.forEach(d => {
        const cant = parseFloat(document.getElementById(`cantArqM_${d}`)?.value || 0);
        const sub = cant * d;
        totalMonedas += sub;
        const lbl = document.getElementById(`totArqM_${d}`);
        if (lbl) lbl.innerText = `$${sub.toFixed(2)}`;
    });

    const totBilletesLbl = document.getElementById('totalBilletesArqueo');
    if (totBilletesLbl) totBilletesLbl.innerText = `$${totalBilletes.toFixed(2)}`;

    const totMonedasLbl = document.getElementById('totalMonedasArqueo');
    if (totMonedasLbl) totMonedasLbl.innerText = `$${totalMonedas.toFixed(2)}`;

    const totalEfectivo = totalBilletes + totalMonedas;
    const fondo = parseFloat(document.getElementById('arqFondoCaja')?.value || 0);
    const declarar = totalEfectivo - fondo;
    const sistema = parseFloat(document.getElementById('arqSistema')?.value || 0);
    const diferencia = declarar - sistema;

    const lblEfectivo = document.getElementById('lblTotalEfectivoArqueo');
    if (lblEfectivo) lblEfectivo.innerText = `$${totalEfectivo.toFixed(2)}`;

    const lblDeclarar = document.getElementById('lblTotalDeclararArqueo');
    if (lblDeclarar) lblDeclarar.innerText = `$${declarar.toFixed(2)}`;

    const lblDif = document.getElementById('lblDiferenciaArqueo');
    if (lblDif) {
        lblDif.innerText = `$${diferencia.toFixed(2)}`;
        const divDif = document.getElementById('divDiferenciaArqueo');
        if (divDif) {
            if (diferencia < 0) {
                divDif.className = "flex justify-between items-center p-2 rounded font-bold bg-red-100 text-red-700";
            } else if (diferencia > 0) {
                divDif.className = "flex justify-between items-center p-2 rounded font-bold bg-green-100 text-green-700";
            } else {
                divDif.className = "flex justify-between items-center p-2 rounded font-bold bg-gray-100 text-gray-800";
            }
        }
    }
}

function calcularRecepcion() {
    let totalBilletes = 0;
    denBilletes.forEach(d => {
        const cant = parseFloat(document.getElementById(`cantRecB_${d}`)?.value || 0);
        const sub = cant * d;
        totalBilletes += sub;
        const lbl = document.getElementById(`totRecB_${d}`);
        if (lbl) lbl.innerText = `$${sub.toFixed(2)}`;
    });

    let totalMonedas = 0;
    denMonedas.forEach(d => {
        const cant = parseFloat(document.getElementById(`cantRecM_${d}`)?.value || 0);
        const sub = cant * d;
        totalMonedas += sub;
        const lbl = document.getElementById(`totRecM_${d}`);
        if (lbl) lbl.innerText = `$${sub.toFixed(2)}`;
    });

    const totBilletesLbl = document.getElementById('totalBilletesRec');
    if (totBilletesLbl) totBilletesLbl.innerText = `$${totalBilletes.toFixed(2)}`;

    const totMonedasLbl = document.getElementById('totalMonedasRec');
    if (totMonedasLbl) totMonedasLbl.innerText = `$${totalMonedas.toFixed(2)}`;

    const totalEfectivo = totalBilletes + totalMonedas;
    const montoFijo = parseFloat(document.getElementById('recMontoFijo')?.value || 0);
    const diferencia = totalEfectivo - montoFijo;

    const lblMontoEst = document.getElementById('lblMontoEstRec');
    if (lblMontoEst) lblMontoEst.innerText = `$${montoFijo.toFixed(2)}`;

    const lblEfectivo = document.getElementById('lblTotalEfectivoRec');
    if (lblEfectivo) lblEfectivo.innerText = `$${totalEfectivo.toFixed(2)}`;

    const lblDif = document.getElementById('lblDiferenciaRec');
    if (lblDif) {
        lblDif.innerText = `$${diferencia.toFixed(2)}`;
        const divDif = document.getElementById('divDiferenciaRec');
        if (divDif) {
            if (diferencia < 0) {
                divDif.className = "w-full flex justify-between items-center p-3 rounded font-black text-base bg-red-100 text-red-700";
            } else if (diferencia > 0) {
                divDif.className = "w-full flex justify-between items-center p-3 rounded font-black text-base bg-green-100 text-green-700";
            } else {
                divDif.className = "w-full flex justify-between items-center p-3 rounded font-black text-base bg-gray-100 text-gray-800";
            }
        }
    }
}

function construirTablas() {
    const tbodyBArqueo = document.getElementById('tbodyBilletesArqueo');
    if (tbodyBArqueo && tbodyBArqueo.children.length === 0) {
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
    if (tbodyMArqueo && tbodyMArqueo.children.length === 0) {
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
    if (tbodyBRec && tbodyBRec.children.length === 0) {
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
    if (tbodyMRec && tbodyMRec.children.length === 0) {
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

document.addEventListener('DOMContentLoaded', () => {
    construirTablas();

    ['arqFecha', 'recFecha', 'lopeFecha', 'cajasFecha', 'subFecha', 'gerFecha', 'actFecha'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.valueAsDate = new Date();
    });

    const ahora = new Date();
    const horaStr = String(ahora.getHours()).padStart(2, '0') + ':' + String(ahora.getMinutes()).padStart(2, '0');
    ['arqHora', 'recHora', 'lopeHora', 'subHora', 'gerHora', 'actHora'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = horaStr;
    });

    inicializarFirmas();
});
