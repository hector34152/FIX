
    // Base de datos extraída directamente del archivo Excel "Auditoría de Exhibición de Máquinas 2025"
    const machinesData = [
        // Aspiradoras
        { code: "101523", clave: "ASP-5X", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "N/A Boquilla tipo garra", "Boquilla cepillo"], conexion: "Conectado", defaultNotes: "" },
        { code: "101524", clave: "ASP-12X", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "Boquilla tipo garra", "N/A Boquilla cepillo"], conexion: "Conectado", defaultNotes: "" },
        { code: "101525", clave: "ASP-16X", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "Boquilla tipo garra", "N/A Boquilla cepillo"], conexion: "Conectado", defaultNotes: "" },
        { code: "102962", clave: "ASP-03", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "N/A Boquilla para ranuras", "N/A Boquilla tipo garra", "N/A Boquilla cepillo", "NO Boquilla con cepillo redondo", "Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "102963", clave: "ASP-04", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "N/A Boquilla tipo garra", "N/A Boquilla cepillo", "NO Boquilla con cepillo redondo", "Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "NO Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "101521", clave: "ASP-5S", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "N/A Boquilla tipo garra", "Boquilla cepillo", "N/A Boquilla con cepillo redondo", "N/A Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "N/A Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "102964", clave: "ASP-06", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "N/A Boquilla tipo garra", "N/A Boquilla cepillo", "NO Boquilla con cepillo redondo", "N/A Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "NO Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "101509", clave: "ASP-12", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "Boquilla para ranuras", "Boquilla tipo garra", "N/A Boquilla cepillo", "N/A Boquilla con cepillo redondo", "N/A Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "N/A Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "12093",  clave: "ASP-12S", cat: "Aspiradoras", reqs: ["N/A Manija", "Ruedas", "Boquilla para ranuras", "Boquilla tipo garra", "N/A Boquilla cepillo", "N/A Boquilla con cepillo redondo", "N/A Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "N/A Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "101520", clave: "ASP-16", cat: "Aspiradoras", reqs: ["N/A Manija", "Ruedas", "Boquilla para ranuras", "Boquilla tipo garra", "N/A Boquilla cepillo", "N/A Boquilla con cepillo redondo", "NO Boquilla de piso", "N/A Bolsa para accesorios", "N/A Manubrio", "N/A Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "101522", clave: "ASP-16S", cat: "Aspiradoras", reqs: ["N/A Manija", "Ruedas", "Boquilla para ranuras", "Boquilla tipo garra", "N/A Boquilla cepillo", "N/A Boquilla con cepillo redondo", "NO Boquilla de piso", "Bolsa para accesorios", "Manubrio", "N/A Soporte de extensión"], conexion: "Conectado", defaultNotes: "" },
        { code: "103159", clave: "ASD-120", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "N/A Boquilla para ranuras", "NO Boquilla cepillo", "Boquilla para piso", "Tubo telescópico", "Manguera flexible"], conexion: "Conectado", defaultNotes: "" },
        { code: "103190", clave: "ASD-150", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "N/A Boquilla para ranuras", "NO Boquilla cepillo", "Boquilla para piso", "Tubo telescópico", "Manguera flexible"], conexion: "Conectado", defaultNotes: "" },
        { code: "103191", clave: "ASD-180", cat: "Aspiradoras", reqs: ["Manija", "Ruedas", "N/A Boquilla para ranuras", "NO Boquilla cepillo", "Boquilla para piso", "Tubo telescópico", "Manguera flexible"], conexion: "Conectado", defaultNotes: "" },
        { code: "29940",  clave: "ASI-20P", cat: "Aspiradoras", reqs: ["Pila", "Cargador", "N/A Manguera", "NO Boquilla para ranuras", "N/A Boquilla tipo garra"], conexion: "Conectado", defaultNotes: "" },
        { code: "102446", clave: "MAX-20A", cat: "Aspiradoras", reqs: ["Pila", "Cargador", "N/A Manguera", "NO Boquilla para ranuras", "N/A Boquilla tipo garra"], conexion: "Conectado", defaultNotes: "" },
        { code: "103955", clave: "ASPI-20A", cat: "Aspiradoras", reqs: ["Pila", "Cargador", "Manguera", "Boquilla para ranuras", "NO Boquilla tipo garra"], conexion: "Conectado", defaultNotes: "" },

        // Bombas de Agua
        { code: "27019", clave: "BOAP-1/2P3", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "49877", clave: "BOAP-1/2F", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "46237", clave: "BOAP-1/2F2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "12111", clave: "BOAP-1/2A2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "10068", clave: "BOAP-1/2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "12113", clave: "BOAP-3/4A2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "10069", clave: "BOAP-3/4", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "12114", clave: "BOAP-1A2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "10070", clave: "BOAP-1", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "103779", clave: "BOAP-1/2A2C", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Periférica", defaultNotes: "" },
        { code: "12780", clave: "BOPA-1/2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Autocebante", defaultNotes: "" },
        { code: "12781", clave: "BOPA-3/4", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Autocebante", defaultNotes: "" },
        { code: "12782", clave: "BOPA-1", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Autocebante", defaultNotes: "" },
        { code: "29933", clave: "BOPA-1/2P", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Autocebante", defaultNotes: "" },
        { code: "29934", clave: "BOPA-3/4P", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Autocebante", defaultNotes: "" },
        { code: "29935", clave: "BOPA-1P", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Autocebante", defaultNotes: "" },
        { code: "10072", clave: "BOAC-1/2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "100431", clave: "BOAC-1/2AX", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "100388", clave: "BOAC-1/2A", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "10073", clave: "BOAC-3/4", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "100432", clave: "BOAC-3/4AX", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "100389", clave: "BOAC-3/4A", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "10074", clave: "BOAC-1", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "10075", clave: "BOAC-1AX", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "100430", clave: "BOAC-1A", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "10066", clave: "BOAC-2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Centrífuga", defaultNotes: "" },
        { code: "12407", clave: "BOAJ-1/2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet", defaultNotes: "" },
        { code: "13555", clave: "BOAJ-1/2I", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet Inoxidable", defaultNotes: "" },
        { code: "13557", clave: "BOAJ-3/4I", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet Inoxidable", defaultNotes: "" },
        { code: "12408", clave: "BOAJ-1", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet", defaultNotes: "" },
        { code: "13559", clave: "BOAJ-1I", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet", defaultNotes: "" },
        { code: "101102", clave: "BOAJ-1-1/2I", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet Inoxidable", defaultNotes: "" },
        { code: "12409", clave: "BOAJ-1-1/2", cat: "Bombas de Agua", reqs: ["Exhibir sin caja"], tipo: "Jet Inoxidable", defaultNotes: "" },
        { code: "12601",  clave: "BOS-1/2LP",     cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "27195",  clave: "BOS-1/2LPP",    cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "12602",  clave: "BOS-1LP",       cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "27197",  clave: "BOS-1LPP",      cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "12600",  clave: "BOS-3/4LP",     cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "27196",  clave: "BOS-3/4LPP",    cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "12603",  clave: "BOS-1SP",       cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "12604",  clave: "BOS-1-1/2SP",   cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "27199",  clave: "BOS-1-1/2SPP",  cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "27198",  clave: "BOS-1SPP",      cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Plástica", defaultNotes: "" },
  { code: "15003",  clave: "BOS-1LPX",      cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "15002",  clave: "BOS-3/4LPX",    cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "15001",  clave: "BOS-1/2LPX",    cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "12607",  clave: "BOS-1SM",       cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "12608",  clave: "BOS-1-1/2SM",   cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "104078", clave: "BOS-1-1/2SI",   cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "104077", clave: "BOS-1SI",       cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Metálica", defaultNotes: "" },
  { code: "100169", clave: "BOS-1/2LH",     cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Hierro", defaultNotes: "" },
  { code: "100171", clave: "BOS-1LH",       cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Hierro", defaultNotes: "" },
  { code: "100170", clave: "BOS-3/4LH",     cat: "Bombas de Agua", reqs: ["Adaptador para manguera"], tipo: "Hierro", defaultNotes: "" },
  { code: "16933",  clave: "BOS-1/2LM2",    cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "102974", clave: "BOS-1/2LM-2",   cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "28205",  clave: "BOS-1/2LMP",    cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "16934",  clave: "BOS-3/4LM2",    cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "28204",  clave: "BOS-3/4LMP",    cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "12625",  clave: "BOS-1LM",       cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "102975", clave: "BOS-1LM-2",     cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "102976", clave: "BOS-1-1/2LM-2", cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "28203",  clave: "BOS-1LMP",      cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "12626",  clave: "BOS-1-1/2LM",   cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "28202",  clave: "BOS-1-1/2LMP",  cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "12627",  clave: "BOS-2LM",       cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "102977", clave: "BOS-2LM-2",     cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "28201",  clave: "BOS-2LMP",      cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "102978", clave: "BOS-3LM-2",     cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },
  { code: "102979", clave: "BOS-5-1/2LM-2", cat: "Bombas de Agua", reqs: ["N/A Adaptador para manguera"], tipo: "Pozo", defaultNotes: "" },

  // Tabla 2: Presurizadores, Hidroneumáticos y Controles automáticos
  { code: "14635",  clave: "PRE-1/6",        cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "103355", clave: "PRE-1/6R",       cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "14637",  clave: "PRE-1/3",        cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "103356", clave: "PRE-1/3R",       cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102858", clave: "PRE-1/2I",       cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102857", clave: "PRE-1I",         cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102855", clave: "PRE-1",          cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102856", clave: "PRE-1/2",        cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102857", clave: "PRE-1I",         cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102858", clave: "PRE-1/2I",       cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102384", clave: "PREM-1/2",       cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102385", clave: "PREM-3/4",       cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102386", clave: "PREM-1",         cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "102387", clave: "PREM-1 1/3",     cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Presurizadores", defaultNotes: "" },
  { code: "10077",  clave: "HIDR-1/2X24",    cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "Manguera", "N/A Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "20183",  clave: "HIDR-1/2X24P",   cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "Manguera", "N/A Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "12254",  clave: "HIDR-1/2X50",    cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "Manguera", "N/A Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "20184",  clave: "HIDR-1/2X50P",   cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "Manguera", "N/A Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "12255",  clave: "HIDR-1-1/2X100", cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "NO Manguera", "NO Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "12257",  clave: "HIDR-1-1/2X150", cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "NO Manguera", "NO Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "104049", clave: "HIDR-1X80",      cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "NO Manguera", "NO Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "104048", clave: "HIDR-1X50",      cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "NO Manguera", "NO Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "104046", clave: "HIDR-3/4X24",    cat: "Bombas de Agua", reqs: ["N/A Controles automáticos", "Manguera", "N/A Adaptador para manguera"], tipo: "Hidroneumáticos", defaultNotes: "" },
  { code: "102417", clave: "CBP-180",        cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Controles automáticos", defaultNotes: "" },
  { code: "102416", clave: "CBP-90",         cat: "Bombas de Agua", reqs: ["Controles automáticos", "N/A Manguera", "N/A Adaptador para manguera"], tipo: "Controles automáticos", defaultNotes: "" },

  // Tabla 3: Caladoras
  { code: "29003",  clave: "CALA-P4",  cat: "Caladoras", reqs: ["Adaptador", "Conectada", "NO Consumibles", "N/A Guía", "NO Llave allen", "N/A PILA", "N/A Cargada"], conexion: "Conectado", defaultNotes: "" },
  { code: "15420",  clave: "CALA-A3",  cat: "Caladoras", reqs: ["N/A Adaptador", "Conectada", "NO Consumibles", "NO Guía", "NO Llave allen", "N/A PILA", "N/A Cargada"], conexion: "Conectado", defaultNotes: "" },
  { code: "15423",  clave: "CALA-A5",  cat: "Caladoras", reqs: ["Adaptador", "Conectada", "NO Consumibles", "NO Guía", "NO Llave allen", "N/A PILA", "N/A Cargada"], conexion: "Conectado", defaultNotes: "" },
  { code: "15348",  clave: "CALA-NX6", cat: "Caladoras", reqs: ["Adaptador", "Conectada", "NO Consumibles", "NO Guía", "NO Llave allen", "N/A PILA", "N/A Cargada"], conexion: "Conectado", defaultNotes: "" },
  { code: "28270",  clave: "CALI-20P", cat: "Caladoras", reqs: ["Adaptador", "N/A Conectada", "NO Consumibles", "NO Guía", "NO Llave allen", "PILA", "Cargada"], conexion: "Conectado", defaultNotes: "" },
  { code: "102859", clave: "CALI-20A", cat: "Caladoras", reqs: ["Adaptador", "N/A Conectada", "NO Consumibles", "NO Guía", "NO Llave allen", "PILA", "Cargada"], conexion: "Conectado", defaultNotes: "" },

    // Tabla 4: Calentadores de paso y deposito
  { code: "47921", clave: "CALE-6PA",   cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "47922", clave: "CALE-9PA",   cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "45267", clave: "CALE-38D",   cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "45271", clave: "CALE-6I",    cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "47352", clave: "CALE-6I-N",  cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "43050", clave: "CALE-11I",   cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "47353", clave: "CALE-11I-N", cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "43051", clave: "CALE-13I",   cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "47354", clave: "CALE-13I-N", cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "43051", clave: "CALE-13I",   cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "48015", clave: "CALE-14IM",  cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "48016", clave: "CALE-16IM",  cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },
  { code: "48017", clave: "CALE-24IM",  cat: "Calentadores de paso y deposito", reqs: ["Chimenea"], defaultNotes: "" },

  // Tabla 5: Canteadoras
  { code: "102973", clave: "CANT-6B", cat: "Canteadora", reqs: ["N/A Manijas", "N/A Pedal", "Cuchillas", "Guía de apoyo", "Guarda"], defaultNotes: "" },
  { code: "16282",  clave: "CANT-6X", cat: "Canteadora", reqs: ["Manijas", "Pedal", "Cuchillas", "Guía de apoyo", "Guarda"], defaultNotes: "" },
  { code: "16288",  clave: "CANT-8X", cat: "Canteadora", reqs: ["Manijas", "Pedal", "Cuchillas", "Guía de apoyo", "Guarda"], defaultNotes: "" },

    // Tabla 6: Cepillos
  { code: "100502", clave: "CEPEL-3-1/4A4", cat: "Cepillos", reqs: ["NO Conectada", "NO Bolsa recolectora", "N/A Extensiones de mesa", "N/A Gomas", "N/A Manivela", "N/A Consumibles"], defaultNotes: "" },
  { code: "102800", clave: "CEPEL-3-1/4N2", cat: "Cepillos", reqs: ["NO Conectada", "NO Bolsa recolectora", "N/A Extensiones de mesa", "N/A Gomas", "N/A Manivela", "N/A Consumibles"], defaultNotes: "" },
  { code: "13089",  clave: "CEPEL-4-1/2NX", cat: "Cepillos", reqs: ["NO Conectada", "NO Bolsa recolectora", "N/A Extensiones de mesa", "N/A Gomas", "N/A Manivela", "N/A Consumibles"], defaultNotes: "" },
  { code: "16240",  clave: "CEP-12",        cat: "Cepillos", reqs: ["NO Conectada", "N/A Bolsa recolectora", "Extensiones de mesa", "Gomas", "Manivela", "N/A Consumibles"], defaultNotes: "" },

  // Tabla 7: Colectores de polvo
  { code: "103164", clave: "COPO-1", cat: "Colectores de polvo", reqs: ["NO Conectados", "manguera", "Bolsa"], defaultNotes: "" },
  { code: "103165", clave: "COPO-2", cat: "Colectores de polvo", reqs: ["NO Conectados", "manguera", "Bolsa"], defaultNotes: "" },

  // Tabla 8: Compresores
  { code: "17247",  clave: "COMP-AERO",  cat: "Compresores", reqs: ["Filtro de aire", "Gomas", "N/A Manubrio", "N/A Ruedas"], defaultNotes: "" },
  { code: "13824",  clave: "COMP-12S",   cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "N/A Ruedas"], defaultNotes: "" },
  { code: "13830",  clave: "COMP-24S",   cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "N/A Ruedas"], defaultNotes: "" },
  { code: "103030", clave: "COMP-10L2",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "N/A Ruedas"], defaultNotes: "" },
  { code: "23065",  clave: "COMP-20LP",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "15006",  clave: "COMP-25LT",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "102958", clave: "COMP-25Q",   cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "23066",  clave: "COMP-40LP",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "15007",  clave: "COMP-50LT",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "102959", clave: "COMP-50Q",   cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "19005",  clave: "COMP-60LB",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "19359",  clave: "COMP-120LH", cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "13836",  clave: "COMP-30S",   cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "N/A Ruedas"], defaultNotes: "" },
  { code: "13847",  clave: "COMP-50S",   cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "N/A Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "19360",  clave: "COMP-50LV",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "15656",  clave: "COMP-80LV",  cat: "Compresores", reqs: ["NO Filtro de aire", "Gomas", "Manubrio", "Ruedas"], defaultNotes: "" },
  { code: "19358",  clave: "COMP-120LV", cat: "Compresores", reqs: ["NO Filtro de aire", "N/A Gomas", "N/A Manubrio", "N/A Ruedas"], defaultNotes: "" },

    // Tabla 9: Compresores (KITS)
  { code: "101428", clave: "COMP-KIT24S", cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },
  { code: "27106",  clave: "COMP-KIT20P2", cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },
  { code: "24079",  clave: "COMP-KIT20P3", cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },
  { code: "24357",  clave: "COMP-KIT20P",  cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },
  { code: "100300", clave: "COMP-KIT25",   cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },
  { code: "22066",  clave: "COMP-KIT40P",  cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },
  { code: "16095",  clave: "COMP-KIT50",   cat: "Compresores (KITS)", reqs: ["Exhibir dentro de su caja"], defaultNotes: "" },

  // Tabla 10: Cortadores
    { code: "103738", clave: "CAZ-EL-4-1/2N2", cat: "Cortadores", reqs: ["NO Conectada", "Consumibles", "N/A Guarda", "Guía de ángulo", "Guía de profundidad", "N/A Prensa de tornillo"], defaultNotes: "" },
    { code: "11723",  clave: "CM-14N",        cat: "Cortadores", reqs: ["NO Conectada", "Consumibles", "Guarda", "N/A Guía de ángulo", "N/A Guía de profundidad", "Prensa de tornillo"], defaultNotes: "" },
    { code: "17733",  clave: "CM-14N2",       cat: "Cortadores", reqs: ["NO Conectada", "Consumibles", "Guarda", "N/A Guía de ángulo", "N/A Guía de profundidad", "Prensa de tornillo"], defaultNotes: "" },

    // Tabla 11: Desbrozadoras
    { code: "29951",  clave: "DES-300P2", cat: "Desbrozadoras", reqs: ["N/A Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "101263", clave: "DES-550",   cat: "Desbrozadoras", reqs: ["N/A Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "13521",  clave: "DES-1000",  cat: "Desbrozadoras", reqs: ["N/A Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "28272",  clave: "DESI-20P",  cat: "Desbrozadoras", reqs: ["N/A Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "NO Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "103243", clave: "DESI-40A",  cat: "Desbrozadoras", reqs: ["N/A Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "NO Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "102338", clave: "MAX-40D",   cat: "Desbrozadoras", reqs: ["Arnés", "NO Carrete", "Cuchilla", "Guarda", "N/A Mango", "Manubrio", "NO Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "22430",  clave: "DES-25P",   cat: "Desbrozadoras", reqs: ["N/A Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "12496",  clave: "DES-26C",   cat: "Desbrozadoras", reqs: ["Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "12497",  clave: "DES-30R",   cat: "Desbrozadoras", reqs: ["Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "12498",  clave: "DES-30C",   cat: "Desbrozadoras", reqs: ["Arnés", "Carrete", "N/A Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "N/A Accesorios"], defaultNotes: "" },
  { code: "103205", clave: "DES-45M",   cat: "Desbrozadoras", reqs: ["Arnés", "Carrete", "Cuchilla", "Guarda", "Mango", "N/A Manubrio", "N/A Batería", "Accesorios"], defaultNotes: "" },

  // Tabla 12: Desmalezadoras
  { code: "26104", clave: "DES-52P", cat: "Desmalezadoras", reqs: ["Arnés", "NO Carrete", "Cuchilla", "Guarda", "N/A Mango", "Manubrio"], defaultNotes: "" },
  { code: "11029", clave: "DES-330", cat: "Desmalezadoras", reqs: ["Arnés", "NO Carrete", "Cuchilla", "Guarda", "N/A Mango", "Manubrio"], defaultNotes: "" },
  { code: "11031", clave: "DES-430", cat: "Desmalezadoras", reqs: ["Arnés", "NO Carrete", "Cuchilla", "Guarda", "N/A Mango", "Manubrio"], defaultNotes: "" },
  { code: "11032", clave: "DES-520", cat: "Desmalezadoras", reqs: ["Arnés", "NO Carrete", "Cuchilla", "Guarda", "N/A Mango", "Manubrio"], defaultNotes: "" },
  { code: "12671", clave: "DES-63",  cat: "Desmalezadoras", reqs: ["Arnés", "NO Carrete", "Cuchilla", "Guarda", "N/A Mango", "Manubrio"], defaultNotes: "" },

    // Tabla 13: Destornilladores
  { code: "16024",  clave: "DETA-N",     cat: "Destornilladores", reqs: ["N/A Pila", "N/A Cargada", "N/A Clip", "Conectada", "NO Consumibles"], defaultNotes: "" },
  { code: "17033",  clave: "DESI-36",    cat: "Destornilladores", reqs: ["Pila", "Cargada", "N/A Clip", "N/A Conectada", "NO Consumibles"], defaultNotes: "" },
  { code: "26402",  clave: "DESI-36P2",  cat: "Destornilladores", reqs: ["Pila", "Cargada", "N/A Clip", "N/A Conectada", "NO Consumibles"], defaultNotes: "" },
  { code: "101843", clave: "DESI-36X",   cat: "Destornilladores", reqs: ["Pila", "Cargada", "N/A Clip", "N/A Conectada", "NO Consumibles"], defaultNotes: "" },
  { code: "101402", clave: "MAX-20D",    cat: "Destornilladores", reqs: ["Pila", "Cargada", "Clip", "N/A Conectada", "N/A Consumibles"], defaultNotes: "" },
  { code: "103253", clave: "DIMI-20A",   cat: "Destornilladores", reqs: ["Pila", "Cargada", "Clip", "N/A Conectada", "N/A Consumibles"], defaultNotes: "" },
  { code: "28269",  clave: "DIMI-20P",   cat: "Destornilladores", reqs: ["Pila", "Cargada", "Clip", "N/A Conectada", "N/A Consumibles"], defaultNotes: "" },

  // Tabla 14: Rectificadores y miniesmeriles
  { code: "16871",  clave: "ESRE-1/4N",       cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (Puntas)", "N/A Brida", "N/A Guarda", "N/A Mango"], defaultNotes: "" },
  { code: "103474", clave: "SIRC-5",          cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (Puntas)", "N/A Brida", "Guarda", "Mango"], defaultNotes: "" },

  // Tabla 15: Esmeriladoras angulares y combos
  { code: "28236",  clave: "ESMA-4-1/2P5",    cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "24035",  clave: "ESMA-4-1/2P2",    cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "14013",  clave: "ESMA-4-1/2A12",   cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "16683",  clave: "ESMA-4-1/2A9",    cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "100902", clave: "ESMA-45110",      cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "16684",  clave: "ESMA-4-1/2A10",   cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "13931",  clave: "ERGO-4570",       cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "18156",  clave: "ERGO-4580",       cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "13935",  clave: "ERGO-4590",       cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "100901", clave: "ERGO-45110",      cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "13870",  clave: "ESMA-4580N",      cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "102496", clave: "ESMA-4580PN",     cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "12872",  clave: "ESMA-4590N",      cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "12873",  clave: "ESMA-4512N",      cat: "Esmeriles", reqs: ["Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "14012",  clave: "ESMA-7A3",        cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "12482",  clave: "ESMA-9N3",        cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "16590",  clave: "ESMA-9N2",        cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "12483",  clave: "ESMA-9N4",        cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "101526", clave: "COMBOE-4-1/2A12", cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "100250", clave: "COMBOE-4580ALF",  cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "101456", clave: "COMBOE-4590N",    cat: "Esmeriles", reqs: ["NO Conectada", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },

  // Tabla 16: Esmeriladoras inalámbricas
  { code: "28267",  clave: "ESMI-20P",        cat: "Esmeriles", reqs: ["Cargada", "Pila", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "102449", clave: "MAX-20E",         cat: "Esmeriles", reqs: ["Cargada", "Pila", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },
  { code: "103639", clave: "MAX-20EP",        cat: "Esmeriles", reqs: ["Cargada", "Pila", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },

  // Tabla 17: Esmeriladoras neumáticas
  { code: "11188",  clave: "TPN-876-2", cat: "Esmeril Neumático", reqs: ["Tuerca de Collete", "NO Consumible (Puntas)", "N/A Consumible (discos)", "N/A Brida", "N/A Guarda", "N/A Mango"], defaultNotes: "" },
  { code: "16886",  clave: "TPN-875-2", cat: "Esmeril Neumático", reqs: ["Tuerca de Collete", "NO Consumible (Puntas)", "N/A Consumible (discos)", "N/A Brida", "N/A Guarda", "N/A Mango"], defaultNotes: "" },
  { code: "101072", clave: "TPN-875",   cat: "Esmeril Neumático", reqs: ["N/A Tuerca de Collete", "N/A Consumible (Puntas)", "NO Consumible (discos)", "NO Brida", "Guarda", "Mango"], defaultNotes: "" },

    // Tabla 18: Gatos
  { code: "22070", clave: "GAPA-2P",     cat: "Gatos", reqs: ["Mango"], defaultNotes: "" },
  { code: "14944", clave: "GAPA-2E",     cat: "Gatos", reqs: ["Mango"], defaultNotes: "" },
  { code: "14824", clave: "GAPA-2",      cat: "Gatos", reqs: ["Mango"], defaultNotes: "" },
  { code: "14946", clave: "GAPA-250",    cat: "Gatos", reqs: ["Mango"], defaultNotes: "" },
  { code: "14802", clave: "GAPRO-3.5PB", cat: "Gatos", reqs: ["N/A Mango"], defaultNotes: "" },

  // Tabla 19: Generadores
  { code: "29913",  clave: "GEN-08P",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "26033",  clave: "GEN-10P",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "103775", clave: "GEN-351",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "103773", clave: "GEN-350",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "103959", clave: "GEN-60D",  cat: "Generadores", reqs: ["N/A Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "103278", clave: "GEN-200",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "103279", clave: "GEN-201",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "26034",  clave: "GEN-25P",  cat: "Generadores", reqs: ["N/A Manubrio", "N/A Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "26035",  clave: "GEN-55P",  cat: "Generadores", reqs: ["N/A Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "26036",  clave: "GEN-70P",  cat: "Generadores", reqs: ["N/A Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "15341",  clave: "GEN-15X",  cat: "Generadores", reqs: ["Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "15342",  clave: "GEN-25X",  cat: "Generadores", reqs: ["Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "15343",  clave: "GEN-45X",  cat: "Generadores", reqs: ["Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "15344",  clave: "GEN-55X",  cat: "Generadores", reqs: ["Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "15345",  clave: "GEN-80X",  cat: "Generadores", reqs: ["Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },
  { code: "14359",  clave: "GEN-100X", cat: "Generadores", reqs: ["Manubrio", "Ruedas", "Gomas antiderrapantes"], defaultNotes: "" },

    // Tabla 20: Herramientas rotativas
  { code: "103580", clave: "MOTO-A3",  cat: "Herramienta rotativa", reqs: ["Conectada", "N/A Cargada", "Boquilla"], defaultNotes: "" },
  { code: "103581", clave: "MOTO-A3K", cat: "Herramienta rotativa", reqs: ["Conectada", "N/A Cargada", "Boquilla"], defaultNotes: "" },
  { code: "102271", clave: "MOTO-AI",  cat: "Herramienta rotativa", reqs: ["N/A Conectada", "Cargada", "Boquilla"], defaultNotes: "" },

    // Tabla 21: Herramientas industriales
  { code: "28147",  clave: "RECE-160P", cat: "Herramienta Industrial", reqs: ["Ruedas", "Olla", "N/A Chicote", "N/A Barreno"], defaultNotes: "" },
  { code: "103237", clave: "VICO-55",   cat: "Herramienta Industrial", reqs: ["N/A Ruedas", "N/A Olla", "NO Chicote", "N/A Barreno"], defaultNotes: "" },
  { code: "103204", clave: "AHO-52",    cat: "Herramienta Industrial", reqs: ["N/A Ruedas", "N/A Olla", "N/A Chicote", "Barreno"], defaultNotes: "" },
  { code: "102971", clave: "BAI-55",     cat: "Herramienta Industrial", reqs: ["Ruedas", "N/A Olla", "N/A Chicote", "N/A Barreno"], defaultNotes: "" },

    // Tabla 22: Hidrolavadoras
    { code: "29004",  clave: "HILA-1350P", cat: "Hidrolavadoras", reqs: ["Manija", "NO Lanza de extensión", "NO Lanza", "N/A Mango", "Manguera", "Pistola", "N/A Ruedas", "N/A Boquillas", "Soporte/Gancho", "N/A Soporte de lanza", "N/A Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },
  { code: "101593", clave: "HILA-1500",  cat: "Hidrolavadoras", reqs: ["Manija", "Lanza de extensión", "NO Lanza", "N/A Mango", "Manguera", "Pistola", "N/A Ruedas", "N/A Boquillas", "Soporte/Gancho", "N/A Soporte de lanza", "NO Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },
  { code: "102795", clave: "HILA-1600C", cat: "Hidrolavadoras", reqs: ["N/A Manija", "NO Lanza de extensión", "NO Lanza", "N/A Mango", "NO Manguera", "Pistola", "N/A Ruedas", "N/A Boquillas", "N/A Soporte/Gancho", "N/A Soporte de lanza", "Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },
  { code: "101594", clave: "HILA-1800",  cat: "Hidrolavadoras", reqs: ["Manija", "Lanza de extensión", "NO Lanza", "N/A Mango", "Manguera", "Pistola", "Ruedas", "N/A Boquillas", "Soporte/Gancho", "N/A Soporte de lanza", "NO Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },
  { code: "101595", clave: "HILA-2000",  cat: "Hidrolavadoras", reqs: ["Manija", "NO Lanza de extensión", "Lanza", "N/A Mango", "Manguera", "Pistola", "Ruedas", "N/A Boquillas", "Soporte/Gancho", "Soporte de lanza", "Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },
  { code: "102111", clave: "HILA-2000X", cat: "Hidrolavadoras", reqs: ["Manija", "NO Lanza de extensión", "Lanza", "N/A Mango", "Manguera", "Pistola", "Ruedas", "NO Boquillas", "Soporte/Gancho", "Soporte de lanza", "Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },
  { code: "103983", clave: "LAGAS-28",   cat: "Hidrolavadoras", reqs: ["N/A Manija", "NO Lanza de extensión", "Lanza", "Mango", "Manguera", "Pistola", "Ruedas", "NO Boquillas", "N/A Soporte/Gancho", "N/A Soporte de lanza", "N/A Dispensador de jabón", "Gomas"], defaultNotes: "" },
  { code: "103982", clave: "LAGAS-33",   cat: "Hidrolavadoras", reqs: ["N/A Manija", "NO Lanza de extensión", "Lanza", "Mango", "Manguera", "Pistola", "Ruedas", "NO Boquillas", "N/A Soporte/Gancho", "N/A Soporte de lanza", "N/A Dispensador de jabón", "Gomas"], defaultNotes: "" },
  { code: "12908",  clave: "LAGAS-28",   cat: "Hidrolavadoras", reqs: ["N/A Manija", "Lanza de extensión", "NO Lanza", "N/A Mango", "Manguera", "Pistola", "Ruedas", "NO Boquillas", "Soporte/Gancho", "N/A Soporte de lanza", "Dispensador de jabón", "Gomas"], defaultNotes: "" },
  { code: "12909",  clave: "LAGAS-33",   cat: "Hidrolavadoras", reqs: ["N/A Manija", "Lanza de extensión", "NO Lanza", "Mango", "Manguera", "Pistola", "Ruedas", "NO Boquillas", "Soporte/Gancho", "N/A Soporte de lanza", "Dispensador de jabón", "Gomas"], defaultNotes: "" },
  { code: "12910",  clave: "LAGAS-4000", cat: "Hidrolavadoras", reqs: ["N/A Manija", "Lanza de extensión", "NO Lanza", "Mango", "Manguera", "Pistola", "Ruedas", "Boquillas", "N/A Soporte/Gancho", "N/A Soporte de lanza", "N/A Dispensador de jabón", "Gomas"], defaultNotes: "" },
  { code: "103770", clave: "HILA-1500H", cat: "Hidrolavadoras", reqs: ["Manija", "Lanza de extensión", "NO Lanza", "N/A Mango", "NO Manguera", "Pistola", "Ruedas", "N/A Boquillas", "Soporte/Gancho", "N/A Soporte de lanza", "Dispensador de jabón", "N/A Gomas"], defaultNotes: "" },

    // Tabla 23: Lijadoras de banda
  { code: "12110",  clave: "PUL-4X6T",      cat: "Lijadoras de banda", reqs: ["N/A Recolector / Adaptador", "NO Conectada", "Consumibles", "Guía"], defaultNotes: "" },
  { code: "13448",  clave: "LIBA-3X21A2",   cat: "Lijadoras de banda", reqs: ["NO Recolector / Adaptador", "NO Conectada", "NO Consumibles", "N/A Guía"], defaultNotes: "" },
  { code: "100370", clave: "LIBA-4X24N3",   cat: "Lijadoras de banda", reqs: ["NO Recolector / Adaptador", "NO Conectada", "NO Consumibles", "N/A Guía"], defaultNotes: "" },

    // Tabla 24: Lijadoras orbitales / Roto orbitales
  { code: "103325", clave: "LIOR-1/4N2", cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },
  { code: "102746", clave: "LIOR-1/4A3", cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },
  { code: "28220",  clave: "LIOR-1/3P4", cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },
  { code: "103670", clave: "LIPA-9A",    cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "Manguera", "NO Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },
  { code: "103656", clave: "LIRO-5A2",   cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },
  { code: "103735", clave: "LIRO-5N",    cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },
  { code: "28271",  clave: "LIRI-20P",   cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "N/A Conectada", "Cargada", "Pila"], defaultNotes: "" },
  { code: "102863", clave: "LIRI-20A",   cat: "Lijadoras orbitales / Roto orbitales", reqs: ["Recolector / Adaptador", "N/A Manguera", "N/A Conectada", "Cargada", "Pila"], defaultNotes: "" },
  { code: "101895", clave: "TPN-861-2",  cat: "Lijadoras orbitales / Roto orbitales", reqs: ["N/A Recolector / Adaptador", "N/A Manguera", "N/A Conectada", "N/A Cargada", "N/A Pila"], defaultNotes: "" },

    // Tabla 25: Limpiadoras a vapor
  { code: "103206", clave: "LV-1800", cat: "Limpiadora a vapor", reqs: ["NO Conectada", "Pistola", "Manguera", "NO Tubos de extensión", "Boquilla para muros y pisos", "NO Cepillos", "NO Boquilla"], defaultNotes: "" },


    // Tabla 26: Llaves de impacto y Remachadoras neumáticas
  { code: "11682",  clave: "IMP-1/2N",    cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },
  { code: "101403", clave: "MAX-20L",     cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "Pila", "Cargada", "Clip"], defaultNotes: "" },
  { code: "103251", clave: "LIMI-20A",    cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "Pila", "Cargada", "Clip"], defaultNotes: "" },
  { code: "103552", clave: "IMP-1/2A",    cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },
  { code: "28268",  clave: "LIMI-20P",    cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "Pila", "Cargada", "Clip"], defaultNotes: "" },
  { code: "11186",  clave: "TPN-797-6-2", cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },
  { code: "11187",  clave: "TPN-734H-2",  cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },
  { code: "18242",  clave: "TPN-731EX",   cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },
  { code: "16889",  clave: "TPN-776X-2",  cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },
  { code: "16885",  clave: "TPN-722-2",   cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["N/A Conectada", "N/A Pila", "N/A Cargada", "N/A Clip"], defaultNotes: "" },

  // Tabla 27: Remachadoras neumáticas
  { code: "18241",  clave: "TPN-884",     cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["Contenedor de vástagos"], defaultNotes: "" },
  { code: "101896", clave: "TPN-883-2",   cat: "Llaves de impacto y Remachadoras neumáticas", reqs: ["Contenedor de vástagos"], defaultNotes: "" },

// Tabla 28: Motosierras / Cortasetos
  { code: "16295",  clave: "MOTE-18",   cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "102735", clave: "MOT-3814",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "16296",  clave: "MOT-3816",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "16297",  clave: "MOT-3818",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "28248",  clave: "MOT-4516P", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "26017",  clave: "MOT-4518P", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "26015",  clave: "MOT-4520P", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "27044",  clave: "MOT-6018P", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "102899", clave: "MOT-5016",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "102920", clave: "MOT-5018",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "102921", clave: "MOT-5020",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "16627",  clave: "MOT-4520",  cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "28249",  clave: "MOT-5220P", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "27045",  clave: "MOT-6020P", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "103642", clave: "MOT-2510T", cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "N/A Pila", "Arnés", "NO Accesorios"], defaultNotes: "" },
  { code: "102491", clave: "MAX-40M",   cat: "Motosierras / Cortasetos", reqs: ["NO Cadena", "Barra de corte", "N/A Cuchillas", "NO Guarda protectora para barra de corte/cuchillas", "NO Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "12251",  clave: "COS-26X",   cat: "Motosierras / Cortasetos", reqs: ["N/A Cadena", "N/A Barra de corte", "Cuchillas", "Guarda protectora para barra de corte/cuchillas", "N/A Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "28273",  clave: "CORI-20",   cat: "Motosierras / Cortasetos", reqs: ["N/A Cadena", "N/A Barra de corte", "Cuchillas", "Guarda protectora para barra de corte/cuchillas", "NO Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },
  { code: "102490", clave: "MAX-40C",   cat: "Motosierras / Cortasetos", reqs: ["N/A Cadena", "N/A Barra de corte", "Cuchillas", "Guarda protectora para barra de corte/cuchillas", "NO Pila", "N/A Arnés", "N/A Accesorios"], defaultNotes: "" },

    // Tabla 29: Motobombas
  { code: "102432", clave: "MOTB-14", cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "101110", clave: "MOTB-1",  cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "28029",  clave: "MOTB-2P", cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "17116",  clave: "MOTB-2",  cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "26063",  clave: "MOTB-3P", cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "17117",  clave: "MOTB-3",  cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "17118",  clave: "MOTB-4",  cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "102422", clave: "MOTB-4D", cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "102405", clave: "MOTB-4X", cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },
  { code: "103926", clave: "MOTB-12", cat: "Motobombas", reqs: ["Conectores (Entrada y Salida)", "Gomas"], defaultNotes: "" },

    // Tabla 30: Martillos demoledores
  { code: "100890", clave: "MADE-6NX",  cat: "Martillos demoledores", reqs: ["NO Conectada", "Sujetador de herramientas", "Mango auxiliar", "N/A Mango tipo \"D\"", "NO Cincel punta plana"], defaultNotes: "" },
  { code: "100891", clave: "MADE-10NX", cat: "Martillos demoledores", reqs: ["NO Conectada", "Sujetador de herramientas", "Mango auxiliar", "Mango tipo \"D\"", "NO Cincel punta plana"], defaultNotes: "" },
  { code: "100893", clave: "MADE-20NX", cat: "Martillos demoledores", reqs: ["NO Conectada", "Sujetador de herramientas", "Mango auxiliar", "N/A Mango tipo \"D\"", "Cincel punta plana"], defaultNotes: "" },
  { code: "100894", clave: "MADE-30NX", cat: "Martillos demoledores", reqs: ["NO Conectada", "Sujetador de herramientas", "Mango auxiliar", "N/A Mango tipo \"D\"", "Cincel punta plana"], defaultNotes: "" },

    // Tabla 31: Multiherramientas
  { code: "102429", clave: "MULH-35A", cat: "Multiherramienta", reqs: ["NO Conectada", "Hoja recta para corte (madera y plástico)"], defaultNotes: "" },

    // Tabla 32: Pistolas de calor
  { code: "102578", clave: "PISCA-AM", cat: "Pistola de calor", reqs: ["NO Conectada"], defaultNotes: "" },
  { code: "17279",  clave: "PISCA-A2", cat: "Pistola de calor", reqs: ["NO Conectada"], defaultNotes: "" },
  { code: "16432",  clave: "PISCA-A",  cat: "Pistola de calor", reqs: ["NO Conectada"], defaultNotes: "" },

    // Tabla 33: Pistolas para pintar succión
  { code: "19000", clave: "PIPI-26",   cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "19510", clave: "PIPI-27",   cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "14037", clave: "PIPI-200",  cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "14036", clave: "PIPI-210",  cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "14030", clave: "PIPI-340X", cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "14084", clave: "PIPI-330",  cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "14085", clave: "PIPI-320",  cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },
  { code: "14087", clave: "PIPI-310",  cat: "Pistolas para pintar succión", reqs: ["Boquilla", "Reguladores", "Vaso"], defaultNotes: "" },

    // Tabla 34: Pistolas para pintar de gravedad
  { code: "11097",  clave: "PIPI-410",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "11989",  clave: "PIPI-411",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "11749",  clave: "PIPI-420X", cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "12128",  clave: "PIPI-440",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "14031",  clave: "PIPI-440X", cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "12129",  clave: "PIPI-441",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "13061",  clave: "PIPI-421",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "12131",  clave: "PIPI-442",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "13060",  clave: "PIPI-422",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "101090", clave: "PIPI-450",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "101855", clave: "PIPI-401",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "11095",  clave: "PIPI-420",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "101091", clave: "PIPI-451",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "101856", clave: "PIPI-402",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "101092", clave: "PIPI-452",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "101857", clave: "PIPI-403",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "103929", clave: "PIPI-503",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "103928", clave: "PIPI-502",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },
  { code: "103927", clave: "PIPI-501",  cat: "Pistolas para pintar de gravedad", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },

  // Tabla 35: Pistolas para pintar retoques
  { code: "11098", clave: "PIPI-400", cat: "Pistolas para pintar retoques", reqs: ["Boquilla", "Reguladores", "Tapa", "Vaso"], defaultNotes: "" },

    // Tabla 36: Pistolas para pintar eléctricas
  { code: "15382",  clave: "PIPI-33E",  cat: "Pistolas para pintar eléctricas", reqs: ["Boquilla", "Vaso", "N/A Manguera", "N/A Pila"], defaultNotes: "" },
  { code: "15383",  clave: "PIPI-44E",  cat: "Pistolas para pintar eléctricas", reqs: ["Boquilla", "Vaso", "NO Manguera", "N/A Pila"], defaultNotes: "" },
  { code: "103690", clave: "PIPI-70EX", cat: "Pistolas para pintar eléctricas", reqs: ["Boquilla", "Vaso", "NO Manguera", "N/A Pila"], defaultNotes: "" },
  { code: "29010",  clave: "PIPI-20P",  cat: "Pistolas para pintar eléctricas", reqs: ["Boquilla", "Vaso", "N/A Manguera", "Pila"], defaultNotes: "" },

    // Tabla 37: Podadoras
  { code: "20589",  clave: "P-316P",    cat: "Podadoras", reqs: ["N/A Recolector / Adaptador", "Manillar", "Ruedas", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "19966",  clave: "P-418",     cat: "Podadoras", reqs: ["Recolector / Adaptador", "Manillar", "Ruedas", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "19967",  clave: "P-520",     cat: "Podadoras", reqs: ["Recolector / Adaptador", "Manillar", "Ruedas", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "19968",  clave: "P-622",     cat: "Podadoras", reqs: ["Recolector / Adaptador", "Manillar", "Ruedas", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "103245", clave: "PODI-40A",  cat: "Podadoras", reqs: ["Recolector / Adaptador", "Manillar", "Ruedas", "NO Pila", "NO Cargada"], defaultNotes: "" },

    // Tabla 38: Pulidoras
  { code: "102633", clave: "PULA-6AM", cat: "Pulidoras", reqs: ["Conectada", "N/A Plato", "NO Consumibles (Borla / esponja)", "N/A Mango"], defaultNotes: "" },
  { code: "102333", clave: "PULA-6A",  cat: "Pulidoras", reqs: ["Conectada", "Plato", "NO Consumibles (Borla / esponja)", "Mango"], defaultNotes: "" },
  { code: "16626",  clave: "PULA-7A3", cat: "Pulidoras", reqs: ["Conectada", "Plato", "NO Consumibles (Borla / esponja)", "Mango"], defaultNotes: "" },
  { code: "16673",  clave: "PULA-7N",  cat: "Pulidoras", reqs: ["Conectada", "Plato", "NO Consumibles (Borla / esponja)", "Mango"], defaultNotes: "" },
  { code: "28151",  clave: "PULA-7P",  cat: "Pulidoras", reqs: ["Conectada", "Plato", "NO Consumibles (Borla / esponja)", "Mango"], defaultNotes: "" },
  { code: "26400",  clave: "PULA-P",   cat: "Pulidoras", reqs: ["NO Conectada", "N/A Plato", "NO Consumibles (Borla / esponja)", "N/A Mango"], defaultNotes: "" },

    // Tabla 39: Rotomartillos y taladros
  { code: "103067", clave: "TAL-1/4N",       cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "16708",  clave: "TAL-3/8A2",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "16706",  clave: "TAL-3/8N2",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "103068", clave: "TAL-1/2N2",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "103170", clave: "TAL-3/8N",       cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "16714",  clave: "TALE-1/2N",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "Mango", "Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "103662", clave: "MEZ-140A",       cat: "Rotomartillos y taladros", reqs: ["NO Conectada", "N/A Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "NO Varilla mezcladora"], defaultNotes: "" },
  { code: "101519", clave: "MEZ-150N",       cat: "Rotomartillos y taladros", reqs: ["NO Conectada", "N/A Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "NO Varilla mezcladora"], defaultNotes: "" },
  { code: "19368",  clave: "TPN-788RX",      cat: "Rotomartillos y taladros", reqs: ["N/A Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "19369",  clave: "TPN-785HX",      cat: "Rotomartillos y taladros", reqs: ["N/A Conectada", "Broquero", "N/A Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "100291", clave: "COMBOR-1/2A7",   cat: "Rotomartillos y taladros", reqs: ["NO Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "100292", clave: "COMBOR-1/2N6",   cat: "Rotomartillos y taladros", reqs: ["NO Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "10884",  clave: "COMBO-100",      cat: "Rotomartillos y taladros", reqs: ["NO Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "28112",  clave: "ROTO-1/2P6",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "28113",  clave: "ROTO-3/8P6",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "101273", clave: "ROTO-1/2A10",    cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "16736",  clave: "ROTO-3/8A4",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "N/A Varilla de control de profundidad", "N/A Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "15679",  clave: "ROTO-1/2A7",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "19457",  clave: "ROTO-1/2N6",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "14658",  clave: "ROTO-1/2A8",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "15683",  clave: "ROTO-1/2N8",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "14659",  clave: "ROTO-1/2A9",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "19324",  clave: "ROTO-1/2N7",     cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "16666",  clave: "ROTO-1/2NX2",    cat: "Rotomartillos y taladros", reqs: ["Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "16762",  clave: "ROEL-20N",       cat: "Rotomartillos y taladros", reqs: ["Conectada", "NO Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "103066", clave: "ROEL-30A",       cat: "Rotomartillos y taladros", reqs: ["Conectada", "N/A Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "102873", clave: "ROEL-30N2",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "N/A Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "19320",  clave: "ROEL-50N2",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "NO Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "19323",  clave: "ROEL-60N",       cat: "Rotomartillos y taladros", reqs: ["Conectada", "NO Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "101220", clave: "RPLUS-4NX",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "NO Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "100869", clave: "RMAX-15NX",      cat: "Rotomartillos y taladros", reqs: ["Conectada", "N/A Broquero", "N/A Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "103592", clave: "ROEL-60A",       cat: "Rotomartillos y taladros", reqs: ["Conectada", "NO Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },

  // Tabla 40: Rotomartillos y taladros inalámbricos
  { code: "100291", clave: "COMBOR-1/2A7", cat: "Rotomartillos y taladros inalámbricos", reqs: ["NO Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "100292", clave: "COMBOR-1/2N6", cat: "Rotomartillos y taladros inalámbricos", reqs: ["NO Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "10884",  clave: "COMBO-100",    cat: "Rotomartillos y taladros inalámbricos", reqs: ["NO Conectada", "Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },
  { code: "103263", clave: "ROEI-20A",     cat: "Rotomartillos y taladros inalámbricos", reqs: ["Conectada", "NO Broquero", "Varilla de control de profundidad", "Mango", "N/A Mango tipo \"D\"", "N/A Varilla mezcladora"], defaultNotes: "" },

  // Tabla 41: Taladros de piso
  { code: "29932",  clave: "TAPI-8P",  cat: "Taladros de piso", reqs: ["NO Conectada", "Broquero", "Manerales", "Manijas de mesa", "Mesa de trabajo"], defaultNotes: "" },
  { code: "16174",  clave: "TAPI-8",   cat: "Taladros de piso", reqs: ["NO Conectada", "Broquero", "Manerales", "Manijas de mesa", "Mesa de trabajo"], defaultNotes: "" },
  { code: "16178",  clave: "TAPI-13",  cat: "Taladros de piso", reqs: ["NO Conectada", "Broquero", "Manerales", "Manijas de mesa", "Mesa de trabajo"], defaultNotes: "" },
  { code: "16180",  clave: "TAPI-15",  cat: "Taladros de piso", reqs: ["NO Conectada", "Broquero", "Manerales", "Manijas de mesa", "Mesa de trabajo"], defaultNotes: "" },
  { code: "16182",  clave: "TAPI-17",  cat: "Taladros de piso", reqs: ["NO Conectada", "Broquero", "Manerales", "Manijas de mesa", "Mesa de trabajo"], defaultNotes: "" },
  { code: "100989", clave: "TAMA-2N",  cat: "Taladros de piso", reqs: ["NO Conectada", "Broquero", "Manerales", "N/A Manijas de mesa", "N/A Mesa de trabajo"], defaultNotes: "" },

    // Tabla 42: Routers
  { code: "102315", clave: "ROU-MN",   cat: "Routers", reqs: ["Conectada", "Conector para extracción de polvo", "Adaptador para broca 1/4", "NO Consumible"], defaultNotes: "" },
  { code: "16610",  clave: "ROU-N3",   cat: "Routers", reqs: ["Conectada", "Conector para extracción de polvo", "Adaptador para broca 1/4", "NO Consumible"], defaultNotes: "" },
  { code: "100954", clave: "ROU-A3",   cat: "Routers", reqs: ["Conectada", "Conector para extracción de polvo", "Adaptador para broca 1/4", "NO Consumible"], defaultNotes: "" },
  { code: "16611",  clave: "ROU-NX2",  cat: "Routers", reqs: ["Conectada", "Conector para extracción de polvo", "Adaptador para broca 1/4", "NO Consumible"], defaultNotes: "" },
  { code: "102379", clave: "ROU-MA",   cat: "Routers", reqs: ["Conectada", "Conector para extracción de polvo", "Adaptador para broca 1/4", "NO Consumible"], defaultNotes: "" },
  { code: "102865", clave: "ROUI-20A", cat: "Routers", reqs: ["N/A Conectada", "Conector para extracción de polvo", "Adaptador para broca 1/4", "NO Consumible"], defaultNotes: "" },

  // Tabla 43: Sierras circulares
  { code: "11004",  clave: "SICI-7-1/4A3", cat: "Sierra circular", reqs: ["NO Conectada", "N/A Pila", "N/A Cargada", "Consumibles", "N/A Boquilla para polvo"], defaultNotes: "" },
  { code: "11779",  clave: "SICI-7-1/4N4", cat: "Sierra circular", reqs: ["NO Conectada", "N/A Pila", "N/A Cargada", "Consumibles", "N/A Boquilla para polvo"], defaultNotes: "" },
  { code: "27098",  clave: "SICI-7-1/4P",  cat: "Sierra circular", reqs: ["NO Conectada", "N/A Pila", "N/A Cargada", "Consumibles", "N/A Boquilla para polvo"], defaultNotes: "" },
  { code: "100123", clave: "SICI-4-1/2A",  cat: "Sierra circular", reqs: ["NO Conectada", "N/A Pila", "N/A Cargada", "Consumibles", "N/A Boquilla para polvo"], defaultNotes: "" },
  { code: "103740", clave: "SICI-7-1/4N5", cat: "Sierra circular", reqs: ["NO Conectada", "N/A Pila", "N/A Cargada", "Consumibles", "Boquilla para polvo"], defaultNotes: "" },
  { code: "103256", clave: "SICI-20A",     cat: "Sierra circular", reqs: ["N/A Conectada", "NO Pila", "NO Cargada", "Consumibles", "Boquilla para polvo"], defaultNotes: "" },
  { code: "102480", clave: "MAX-20SC",    cat: "Sierra circular", reqs: ["N/A Conectada", "NO Pila", "NO Cargada", "Consumibles", "Boquilla para polvo"], defaultNotes: "" },

  //    Tabla 44: Sierras de cinta
  { code: "16277", clave: "SCI-10",  cat: "Sierra Cinta", reqs: ["NO Conectada", "Consumibles", "Guía de inglete"], defaultNotes: "" },
  { code: "16458", clave: "SCI-14E", cat: "Sierra Cinta", reqs: ["NO Conectada", "Consumibles", "Guía de inglete"], defaultNotes: "" },

  //    Tabla 45: Sierras de inglete
  { code: "103235", clave: "SINCO-12",   cat: "Sierra de inglete", reqs: ["Recolector / Adaptador", "Consumibles", "Guarda", "Guía", "Prensa vertical"], defaultNotes: "" },
  { code: "103236", clave: "SINA-10-3",  cat: "Sierra de inglete", reqs: ["Recolector / Adaptador", "Consumibles", "Guarda", "Guía", "Prensa vertical"], defaultNotes: "" },
  { code: "16869",  clave: "SINCO-10X2", cat: "Sierra de inglete", reqs: ["Recolector / Adaptador", "Consumibles", "Guarda", "Guía", "Prensa vertical"], defaultNotes: "" },

  //    Tabla 46: Sierras de mesa
  { code: "101796", clave: "SME-10B",  cat: "Sierra de Mesa", reqs: ["Consumibles", "Guarda", "Guía de inglete", "Mesa deslizante", "NO Tubo de recolección", "NO Guía paralela"], defaultNotes: "" },
  { code: "29952",  clave: "SME-10BP", cat: "Sierra de Mesa", reqs: ["Consumibles", "Guarda", "Guía de inglete", "Mesa deslizante", "NO Tubo de recolección", "NO Guía paralela"], defaultNotes: "" },

  //    Tabla 47: Sierras sable
  { code: "17269",  clave: "SISA-N2",  cat: "Sierra sable", reqs: ["Conectada", "N/A Pila", "N/A Cargada", "NO Consumibles"], defaultNotes: "" },
  { code: "103258", clave: "SISI-20A", cat: "Sierra sable", reqs: ["N/A Conectada", "Pila", "Cargada", "NO Consumibles"], defaultNotes: "" },

    //    Tabla 48: Sopladoras
  { code: "28274",  clave: "SOPI-20P",  cat: "Sopladoras", reqs: ["N/A Recolector / Adaptador", "Tubo soplador", "NO Boquilla", "N/A Accesorios", "NO Pila", "NO Cargada"], defaultNotes: "" },
  { code: "103303", clave: "SOPLI-40A", cat: "Sopladoras", reqs: ["N/A Recolector / Adaptador", "Tubo soplador", "N/A Boquilla", "NO Accesorios", "NO Pila", "NO Cargada"], defaultNotes: "" },
  { code: "103019", clave: "SOPLA-650", cat: "Sopladoras", reqs: ["NO Recolector / Adaptador", "Tubo soplador", "NO Boquilla", "N/A Accesorios", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "102415", clave: "SOPLA-800", cat: "Sopladoras", reqs: ["NO Recolector / Adaptador", "Tubo soplador", "N/A Boquilla", "NO Accesorios", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "18145",  clave: "SOPLA-960", cat: "Sopladoras", reqs: ["NO Recolector / Adaptador", "Tubo soplador", "N/A Boquilla", "N/A Accesorios", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "18146",  clave: "SOPLA-1440",cat: "Sopladoras", reqs: ["NO Recolector / Adaptador", "Tubo soplador", "Boquilla", "N/A Accesorios", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "13147",  clave: "SOPLA-26T", cat: "Sopladoras", reqs: ["NO Recolector / Adaptador", "Tubo soplador", "N/A Boquilla", "N/A Accesorios", "N/A Pila", "N/A Cargada"], defaultNotes: "" },
  { code: "103265", clave: "SOPI-20A",  cat: "Sopladoras", reqs: ["N/A Recolector / Adaptador", "N/A Tubo soplador", "Boquilla", "N/A Accesorios", "NO Pila", "NO Cargada"], defaultNotes: "" },
  { code: "13047",  clave: "SOPLA-26T", cat: "Sopladoras", reqs: ["NO Recolector / Adaptador", "Tubo soplador", "NO Boquilla", "N/A Accesorios", "NO Pila", "NO Cargada"], defaultNotes: "" },
  { code: "102970", clave: "SOPLA-53",  cat: "Sopladoras", reqs: ["N/A Recolector / Adaptador", "NO Tubo soplador", "NO Boquilla", "N/A Accesorios", "N/A Pila", "N/A Cargada"], defaultNotes: "" },

    //    Tabla 49: Soldadoras
  { code: "103701", clave: "SOIN-101MP",     cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103704", clave: "SOIN-100/120MP", cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "100900", clave: "SOIN-101M",      cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "102322", clave: "SOIN-130M",      cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103702", clave: "SOIN-101P",      cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "11781",  clave: "SOIN-101",       cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "102236", clave: "SOIN-130",       cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103703", clave: "SOIN-130P",      cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "13694",  clave: "SOIN-160",       cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "13696",  clave: "SOIN-200",       cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "17411",  clave: "SOIN-250",       cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103706", clave: "SOIN-110/130P",  cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "11787",  clave: "SOIN-110/130",   cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103707", clave: "SOIN-120/160P",  cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "13695",  clave: "SOIN-120/160",   cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103708", clave: "SOIN-130/200P",  cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "16053",  clave: "SOIN-130/200",   cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "29019",  clave: "SOIN-313 MBP",   cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "29017",  clave: "SOIN-310MP",     cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },
  { code: "103701", clave: "SOIN-100MT",     cat: "Soldadoras", reqs: ["NO Cables", "Correa"], defaultNotes: "" },

  //    Tabla 50: Soldadoras de microalambre
  { code: "13191", clave: "SOMI-130X", cat: "Soldadoras de microalambre", reqs: ["NO Cables"], defaultNotes: "" },
  { code: "13192", clave: "SOMI-130T", cat: "Soldadoras de microalambre", reqs: ["Cables"], defaultNotes: "" },
];

    let currentCategory = 'ALL';
    let auditState = {};

    function init() {
        const saved = localStorage.getItem('fix_audit_2025');
        if (saved) {
            try { auditState = JSON.parse(saved); } catch(e){}
        } else {
            machinesData.forEach(m => {
                auditState[m.code] = {
                    status: 'PENDING',
                    notes: m.defaultNotes
                };
            });
        }
        renderMachines();
        updateStats();
    }

    function renderMachines() {
        const listEl = document.getElementById('machine-list');
        const searchVal = document.getElementById('search-input').value.toLowerCase().trim();
        listEl.innerHTML = '';

        const filtered = machinesData.filter(m => {
            const matchesCat = (currentCategory === 'ALL' || m.cat === currentCategory);
            const matchesSearch = m.code.toLowerCase().includes(searchVal) || m.clave.toLowerCase().includes(searchVal);
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            listEl.innerHTML = '<div style="text-align:center; padding: 40px; color: var(--text-muted);">No se encontraron máquinas para esta búsqueda.</div>';
            return;
        }

        filtered.forEach(m => {
            const state = auditState[m.code] || { status: 'PASS', notes: m.defaultNotes };
            
            const card = document.createElement('div');
            card.className = `machine-card ${state.status === 'FAIL' ? 'has-fail' : ''}`;
            
            let reqsHtml = m.reqs.map(r => {
                const isNo = r.startsWith("NO ");
                const isDna = r.startsWith("N/A ");
                return `<span class="req-badge ${isNo ? 'prohibited' : isDna ? 'dna' : 'required'}">${isNo ? '🚫 ' : isDna ? '-' : '✓ '}${r}</span>`;
            }).join('');

            card.innerHTML = `
                <div class="card-header">
                    <div class="machine-info">
                        <span class="machine-code">Código: ${m.code}</span>
                        <span class="machine-clave">Clave: ${m.clave}</span>
                        <span class="machine-cat">${m.cat}</span>
                        <span class="connection-status">🔌 ${m.conexion}</span>
                    </div>
                </div>
                
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px;">REQUISITOS DE EXHIBICIÓN:</div>
                <div class="req-list">
                    ${reqsHtml}
                </div>

                <div class="status-options">
                    <button class="status-btn pass ${state.status === 'PASS' ? 'active' : ''}" onclick="setStatus('${m.code}', 'PASS')">
                        <span>✓</span> Cumple
                    </button>
                    <button class="status-btn fail ${state.status === 'FAIL' ? 'active' : ''}" onclick="setStatus('${m.code}', 'FAIL')">
                        <span>✗</span> No Cumple
                    </button>
                    <button class="status-btn na ${state.status === 'NA' ? 'active' : ''}" onclick="setStatus('${m.code}', 'NA')">
                        <span>—</span> N/A
                    </button>
                </div>

                <input type="text" class="notes-input" placeholder="Observaciones / Incidencias..." 
                    value="${state.notes !== undefined ? state.notes : m.defaultNotes}" onchange="setNotes('${m.code}', this.value)">
            `;
            listEl.appendChild(card);
        });
    }

    function setStatus(code, status) {
        if (!auditState[code]) auditState[code] = { status: 'PASS', notes: '' };
        auditState[code].status = status;
        saveState();
        renderMachines();
        updateStats();
    }

    function setNotes(code, notes) {
        if (!auditState[code]) auditState[code] = { status: 'PASS', notes: '' };
        auditState[code].notes = notes;
        saveState();
    }

    function saveState() {
        localStorage.setItem('fix_audit_2025_v2', JSON.stringify(auditState));
    }

    function filterCategory(cat) {
        currentCategory = cat;
        document.querySelectorAll('.cat-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.includes(cat) || (cat==='ALL' && btn.textContent==='Todas'));
        });
        renderMachines();
    }

    function handleSearch() {
        renderMachines();
    }

    function updateStats() {
        const total = machinesData.length;
        let pass = 0, fail = 0, pending = 0;

        machinesData.forEach(m => {
            const st = auditState[m.code]?.status || 'PENDING';
            if (st === 'PASS') pass++;
            else if (st === 'FAIL') fail++;
            else if (st === 'NA') pass++;
            else pending++;
        });

        document.getElementById('stat-total').textContent = total;
        document.getElementById('stat-pass').textContent = pass;
        document.getElementById('stat-fail').textContent = fail;
        document.getElementById('stat-pending').textContent = pending;
    }

    function showSummary() {
        const modal = document.getElementById('summary-modal');
        const body = document.getElementById('modal-body');
        
        let fails = [];
        machinesData.forEach(m => {
            const st = auditState[m.code];
            if (st && st.status === 'FAIL') {
                fails.push({ ...m, notes: st.notes });
            }
        });

        let html = `
            <div style="margin-bottom: 15px;">
                <strong>Estado General:</strong> ${document.getElementById('stat-pass').textContent} / ${machinesData.length} Revisados correctamente.
            </div>
        `;

        if (fails.length === 0) {
            html += `<div style="color: var(--success-green); font-weight: 600; padding: 10px 0;">🎉 ¡Excelente! No hay incidencias o fallas registradas en las máquinas auditadas.</div>`;
        } else {
            html += `<div style="color: var(--danger-red); font-weight: 700; margin-bottom: 10px;">Incidencias Detectadas (${fails.length}):</div><div class="summary-list">`;
            fails.forEach(f => {
                html += `
                    <div class="summary-item">
                        <strong>${f.code} - ${f.clave}</strong> (${f.cat})<br>
                        <span style="color: var(--danger-red);">Falla: ${f.notes || 'Sin nota explicativa'}</span>
                    </div>
                `;
            });
            html += `</div>`;
        }

        body.innerHTML = html;
        modal.style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('summary-modal').style.display = 'none';
    }

    // EXPORTACIÓN IDÉNTICA AL FORMATO DE "Exhibición de Máquinas 2025"
    function exportDataExcel() {
        const excelRows = [
            ["Reporte de Cumplimiento de Atributos y Reglas de Exhibición (Guía Oficial 2025)"],
            [], 
            ["Código", "Clave", "Categoría / Familia", "Atributos Requeridos y Reglas", "Estado Conexión", "Cumplimiento", "Observaciones / Incidencias"]
        ];

        machinesData.forEach(m => {
            const st = auditState[m.code] || { status: 'PASS', notes: m.defaultNotes };
            let cumplimientoStr = "Cumple";
            if (st.status === 'FAIL') cumplimientoStr = "No Cumple";
            else if (st.status === 'NA') cumplimientoStr = "N/A";

            excelRows.push([
                m.code,
                m.clave,
                m.cat,
                m.reqs.join(", "),
                m.conexion,
                cumplimientoStr,
                st.notes !== undefined ? st.notes : m.defaultNotes
            ]);
        });

        if (typeof XLSX !== 'undefined') {
            const ws = XLSX.utils.aoa_to_sheet(excelRows);
            ws['!cols'] = [
                { wch: 12 },
                { wch: 18 },
                { wch: 30 },
                { wch: 60 },
                { wch: 22 },
                { wch: 15 },
                { wch: 45 }
            ];

            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Auditoría de Máquinas");
            XLSX.writeFile(wb, `Exhibicion_Maquinas_Fix_${new Date().toISOString().slice(0,10)}.xlsx`);
        } else {
            let csvContent = "\uFEFF";
            excelRows.forEach(row => {
                let formattedRow = row.map(cell => `"${(cell || '').toString().replace(/"/g, '""')}"`).join(",");
                csvContent += formattedRow + "\r\n";
            });

            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `Exhibicion_Maquinas_Fix_${new Date().toISOString().slice(0,10)}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    window.onload = init;
