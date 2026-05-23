import { useState, FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Por favor completa todos los campos requeridos (*).');
      return;
    }
    setErrorMsg('');
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject || 'Nuevo mensaje desde portfolio');
      formData.append('message', message);
      formData.append('_captcha', 'false'); // Disable reCAPTCHA for testing

      const response = await fetch('https://formsubmit.co/ajax/yennerson.olivo@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok || data.success) {
        setIsSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        setErrorMsg('Error al enviar: ' + (data.message || 'Intenta más tarde'));
        console.error('FormSubmit error:', data);
      }
    } catch (err) {
      console.error('Send error:', err);
      setErrorMsg('Error de conexión. Verifica tu internet e intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Absolute backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-4 tracking-tight leading-none">
            Comunícate Conmigo
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contact details cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 bg-slate-900 border border-slate-850 rounded-2xl flex items-start space-x-4">
              <div className="bg-sky-500/10 p-3 rounded-xl text-sky-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] text-slate-500 font-mono block font-semibold uppercase tracking-wider">CORREO ELECTRÓNICO</span>
                <a 
                  href="mailto:yennerson.olivo@gmail.com" 
                  className="font-display font-medium text-[15px] text-white hover:text-sky-305 hover:text-sky-400 transition-colors block mt-1"
                >
                  yennerson.olivo@gmail.com
                </a>
                <span className="text-xs text-slate-400 block mt-1">Escríbeme en cualquier momento.</span>
              </div>
            </div>

            {/* Quick Location Card */}
            <div className="p-6 bg-slate-900 border border-slate-850 rounded-2xl flex items-start space-x-4">
              <div className="bg-indigo-500/10 p-3 rounded-xl text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] text-slate-500 font-mono block font-semibold uppercase tracking-wider">UBICACIÓN</span>
                <span className="font-display font-semibold text-[15px] text-white block mt-1">
                  América Latina / Remoto
                </span>
                <span className="text-xs text-slate-400 block mt-1">Disponibilidad horaria flexible.</span>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="p-6 bg-slate-900 border border-slate-850 rounded-2xl">
              <span className="text-[10px] text-slate-500 font-mono block font-semibold uppercase tracking-wider mb-4">REDES PROFESIONALES</span>
              
              <div className="space-y-3.5">
                <a
                  href="https://github.com/y3nn3rs0n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-850 hover:bg-slate-800/40 text-slate-300 hover:text-white hover:border-slate-700 transition duration-250 cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5">
                    <Github className="w-4.5 h-4.5" />
                    <span className="text-xs font-semibold">GitHub (y3nn3rs0n)</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="https://github.com/y3nn3rs0n/y3nn3rs0n.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-850 hover:bg-slate-800/40 text-slate-300 hover:text-white hover:border-slate-700 transition duration-250 cursor-pointer"
                >
                  <div className="flex items-center space-x-2.5">
                    <Linkedin className="w-4.5 h-4.5 text-sky-400" />
                    <span className="text-xs font-semibold">Portafolio Original Código</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Form UI */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-850 rounded-3xl p-8 relative">
            {isSuccess && (
              <div className="absolute inset-0 bg-slate-900/98 rounded-3xl flex flex-col justify-center items-center p-8 text-center animate-in fade-in duration-300 z-20">
                <div className="bg-emerald-500/10 p-4 rounded-full text-emerald-400 border border-emerald-500/20 mb-4 animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">¡Mensaje Enviado con Éxito!</h3>
                <p className="text-slate-400 max-w-sm mt-3 font-sans">
                  Gracias por comunicarte conmigo, Yenner. He recibido tu mensaje de simulación e iniciaré el contacto inmediato.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 px-5 py-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-705 text-xs font-semibold hover:bg-slate-700 hover:text-white transition"
                >
                  Seguir Navegando
                </button>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="space-y-5">
              <h3 className="font-display font-bold text-white text-lg border-b border-slate-850 pb-3 block">
                Formulario de Enlace Directo
              </h3>

              {errorMsg && (
                <div className="p-3 text-red-400 bg-red-950/20 border border-red-900/25 rounded-xl text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 font-bold block uppercase">Su Nombre *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="P. ej., Juan Pérez"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono text-slate-400 font-bold block uppercase">Su Correo *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="P. ej., juan@email.com"
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 block uppercase font-bold">Asunto</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="P. ej., Cooperación en proyecto Flutter, etc."
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 font-bold block uppercase">Mensaje Requerido *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu propuesta o mensaje aquí..."
                  className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-sky-500 font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:opacity-95 transform active:translate-y-0 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
              >
                {isLoading ? (
                  <span className="font-mono text-xs animate-pulse">Despachando Enlace...</span>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-4 h-4 fill-current text-slate-950" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
