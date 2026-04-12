// Função para gerenciar o tiro com delay de 1 segundo
globalThis.tentarAtirar = function() {
    const runtime = self.runtime;

    // Só atira se a variável global 'podeAtirar' for true
    if (runtime.globalVars.podeAtirar === true) {
        
        // 1. Bloqueia o tiro imediatamente
        runtime.globalVars.podeAtirar = false;

        // 2. Toca o som (usando nossa lógica anterior)
        runtime.globalVars.SomParaTocar = "som_tiro";

        // 3. Cria a bala (se você quiser fazer via código)
        // runtime.objects.Bala.createInstance("Camada 0", x, y);

        console.log("🔥 TIRO!");

        // 4. ESPERA 3 SEGUNDO (1000 milissegundos) para liberar
        setTimeout(() => {
            runtime.globalVars.podeAtirar = true;
            console.log("✅ Arma recarregada!");
        }, 1000);

    } else {
        console.log("⏳ Aguarde... recarregando.");
    }
};