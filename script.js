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
        divTemporal.style.padding = 0;
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

    // 1.5. PROCESAR INPUTS (SOLUCIÓN MEDIANTE POSICIONAMIENTO ABSOLUTO)
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
        contenedorFalso.style.border = estiloOriginal.border;
        contenedorFalso.style.borderRadius = estiloOriginal.borderRadius;
        contenedorFalso.style.backgroundColor = estiloOriginal.backgroundColor;
        contenedorFalso.style.marginTop = 0;
        contenedorFalso.style.marginBottom = 'auto';
        contenedorFalso.style.marginLeft = 'auto';
        contenedorFalso.style.marginRight = 'auto';

        const textoTemporal = document.createElement('span');
        textoTemporal.innerText = input.value || " ";
        
        textoTemporal.style.position = 'absolute';
        textoTemporal.style.top = '35%';
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
        spanTemporal.style.padding = 0;
        spanTemporal.style.marginTop = 0;
        spanTemporal.style.marginBottom = 'auto';

        select.parentNode.insertBefore(spanTemporal, select);
        select.style.display = 'none';
        reemplazos.push({ original: select, temporal: spanTemporal });
    });

    // 3. PROCESAR FECHAS E INPUTS DATETIME
    const elementoFecha = elemento.querySelector('.date-box') || elemento.querySelector('input[type="date"]');
    if (elementoFecha) {
        let textoFecha = elementoFecha.value || elementoFecha.innerText || elementoFecha.textContent;
        
        if (!textoFecha || textoFecha.trim() === "") {
            textoFecha = " "; 
        } else {
            if (textoFecha.includes('T')) {
                const partes = textoFecha.split('T');
                const fechaLimpia = partes[0].replace(/-/g, '/'); 
                const horaLimpia = partes[1];
                textoFecha = `${fechaLimpia}   ${horaLimpia}`; 
            }
        }

        const spanFechaTemporal = document.createElement('span');
        const estiloOriginal = window.getComputedStyle(elementoFecha);
        spanFechaTemporal.innerText = textoFecha;        
        spanFechaTemporal.style.fontFamily = estiloOriginal.fontFamily;
        spanFechaTemporal.style.fontSize = estiloOriginal.fontSize;
        spanFechaTemporal.style.lineHeight = estiloOriginal.lineHeight; 
        spanFechaTemporal.style.color = estiloOriginal.color;
        spanFechaTemporal.style.padding = 0;
        const dimensiones = elementoFecha.getBoundingClientRect();
        spanFechaTemporal.style.width = dimensiones.width + 'px';
        spanFechaTemporal.style.height = dimensiones.height + 'px';
        spanFechaTemporal.style.display = 'inline-flex';
        spanFechaTemporal.style.alignItems = 'center';
        spanFechaTemporal.style.justifyContent = 'center';
        spanFechaTemporal.style.boxSizing = 'border-box';
        spanFechaTemporal.style.marginTop = 0;
        spanFechaTemporal.style.marginBottom = 'auto';
        elementoFecha.parentNode.insertBefore(spanFechaTemporal, elementoFecha);
        elementoFecha.style.display = 'none';
        reemplazos.push({ original: elementoFecha, temporal: spanFechaTemporal });
    }

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
        enlaceDescarga.download = `Evaluacion_.jpg`;
        enlaceDescarga.href = imgData;
        enlaceDescarga.click();

    } catch (error) {
        console.error("Error al generar la imagen JPEG:", error);
        alert("Hubo un problema al generar la imagen del reporte.");
    } finally {
        // Restaurar elementos originales
        reemplazos.forEach(item => {
            item.temporal.remove();
            item.original.style.display = ''; 
        });

        if (botonReferencia) botonReferencia.style.display = 'block';
    }
}

// Denominaciones de diseño de moneda mexicana (MXN)
const denBilletes = [1000, 500, 200, 100, 50, 20];
const denMonedas = [10, 5, 2, 1, 0.5];

// Inicializar Fechas actuales por defecto
if (document.getElementById('arqFecha')) document.getElementById('arqFecha').valueAsDate = new Date();
if (document.getElementById('recFecha')) document.getElementById('recFecha').valueAsDate = new Date();
if (document.getElementById('lopeFecha')) document.getElementById('lopeFecha').valueAsDate = new Date();
if (document.getElementById('cajasFecha')) document.getElementById('cajasFecha').valueAsDate = new Date();

// Colocar hora actual aproximada
const ahora = new Date();
const horaStr = String(ahora.getHours()).padStart(2, '0') + ':' + String(ahora.getMinutes()).padStart(2, '0');
if (document.getElementById('arqHora')) document.getElementById('arqHora').value = horaStr;

// Generar dinámicamente las vistas de tablas
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

// Cálculos del Formato de Arqueo Diario
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

// Cálculos del Formato de Recepción / Fondo Fijo
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

// Manejador de intercambio de Pestañas
function switchTab(tab) {
    const tabArq = document.getElementById('btnTabArqueo');
    const tabRec = document.getElementById('btnTabRecepcion');
    const tabLOPE = document.getElementById('btnTabLOPE');
    const tabCajas = document.getElementById('btnTabCajas');
    
    const secArq = document.getElementById('sectionArqueo');
    const secRec = document.getElementById('sectionRecepcion');
    const secLOPE = document.getElementById('sectionLOPE');
    const secCajas = document.getElementById('sectionCajas');

    const claseInactivo = "py-2 px-4 font-semibold text-sm rounded-t-lg text-gray-500 hover:text-gray-700 whitespace-nowrap";
    const claseActivo = "py-2 px-4 font-semibold text-sm rounded-t-lg bg-white border-t border-x border-gray-200 text-orange-600 -mb-px z-10 whitespace-nowrap";
    
    if (tabArq) tabArq.className = claseInactivo;
    if (tabRec) tabRec.className = claseInactivo;
    if (tabLOPE) tabLOPE.className = claseInactivo;
    if (tabCajas) tabCajas.className = claseInactivo;

    if (secArq) secArq.classList.add('hidden');
    if (secRec) secRec.classList.add('hidden');
    if (secLOPE) secLOPE.classList.add('hidden');
    if (secCajas) secCajas.classList.add('hidden');

    if(tab === 'arqueo' && secArq && tabArq) {
        secArq.classList.remove('hidden');
        tabArq.className = claseActivo;
    } else if(tab === 'recepcion' && secRec && tabRec) {
        secRec.classList.remove('hidden');
        tabRec.className = claseActivo;
    } else if(tab === 'LOPE' && secLOPE && tabLOPE) {
        secLOPE.classList.remove('hidden');
        tabLOPE.className = claseActivo;
    } else if(tab === 'cajas' && secCajas && tabCajas) {
        secCajas.classList.remove('hidden');
        tabCajas.className = claseActivo;
    }
    
    setTimeout(inicializarFirmas, 60);
}

// LÓGICA DE FIRMAS DIGITALES (SIGNATURE PAD)
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
    if (pads[id]) {
        pads[id].clear();
    }
}

window.addEventListener('resize', () => {
    setTimeout(inicializarFirmas, 150);
});

construirTablas();
calcularArqueo();
calcularRecepcion();
setTimeout(inicializarFirmas, 150);

// Función para procesar y mostrar las fotografías tomadas desde el teléfono
function previsualizarImagen(input, idContenedor) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return;

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Crear el contenedor individual de la foto
            const divFoto = document.createElement('div');
            divFoto.className = 'relative border border-gray-200 rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center';

            // Crear la etiqueta de imagen
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'w-full h-full object-cover';

            // Crear botón para eliminar la foto (oculto en la impresión)
            const btnEliminar = document.createElement('button');
            btnEliminar.type = 'button';
            btnEliminar.innerHTML = '&times;';
            btnEliminar.className = 'no-print absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm shadow transition';
            btnEliminar.onclick = function() {
                divFoto.remove();
            };

            // Armar la estructura
            divFoto.appendChild(img);
            divFoto.appendChild(btnEliminar);
            contenedor.appendChild(divFoto);

            // Limpiar el input para permitir capturar otra foto consecutivamente
            input.value = '';
        };

        reader.readAsDataURL(input.files[0]);
    }
}
