"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import Container from "./Container"

type ContactProps = {
  selectedPackage: string | null;
}

export default function Contact({ selectedPackage }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [ formData, setFormData ] = useState({
    name: "",
    contactWay: "",
    vehicle: "",
    packet: "Basic",
    message: "",
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, packet: selectedPackage }));
    }
  }, [selectedPackage]);

  function handleChange (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
  e.preventDefault();
  setStatus('sending');

  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setStatus('success');
        setFormData({
          name: "",
          contactWay: "",
          vehicle: "",
          packet: "",
          message: "",
        });
      } else {
        setStatus('error');
      }
    })
    .catch(() => setStatus('error'));
}

  return (
   <section id="contact" className="py-12 md:py-22">
      <Container>
        <div className="px-8">
          <div className="max-w-140 mb-12">
            <h3 className="font-heading text-xs font-semibold tracking-[0.16em] uppercase text-accent">Kontakt</h3>
            <h2 className="font-heading text-3xl font-semibold leading-[1.6] text-silver-100 mt-3.5">Termin anfragen</h2>
            <p className="text-[15px] leading-[1.6] text-silver-400 mt-3">Formular ausfüllen — wir melden uns innerhalb eines Tages mit einem Terminvorschlag.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <form onSubmit={handleSubmit} className="bg-surface border border-line rounded-xl p-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-[12.5px] text-silver-400 mb-1.5 block">Name</label>
                  <input id="name" name="name" type="text" placeholder="Dein Name" value={formData.name} onChange={handleChange} className="w-full bg-surface-2 border border-line-strong rounded-md py-2.75 px-3 text-silver-100 text-[14px] outline-none transition-colors focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="contactWay" className="text-[12.5px] text-silver-400 mb-1.5 block">Telefon oder E-Mail</label>
                  <input id="contactWay" name="contactWay" type="text" placeholder="+49 ... oder name@mail.de" value={formData.contactWay} onChange={handleChange} className="w-full bg-surface-2 border border-line-strong rounded-md py-2.75 px-3 text-silver-100 text-[14px] outline-none transition-colors focus:border-accent" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="vehicle" className="text-[12.5px] text-silver-400 mb-1.5 block">Fahrzeugmodell</label>
                  <input id="vehicle" name="vehicle" type="text" placeholder="z. B. VW Golf 7" value={formData.vehicle} onChange={handleChange} className="w-full bg-surface-2 border border-line-strong rounded-md py-2.75 px-3 text-silver-100 text-[14px] outline-none transition-colors focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="packet" className="text-[12.5px] text-silver-400 mb-1.5 block">Gewünschtes Paket</label>
                  <select id="packet" name="packet" value={formData.packet} onChange={handleChange} className="w-full bg-surface-2 border border-line-strong rounded-md py-2.75 px-3 text-silver-100 text-[14px] outline-none transition-colors focus:border-accent">
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="premium">Premium</option>
                    <option value="unknow">Bin mir unsicher</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-[12.5px] text-silver-400 mb-1.5 block">Nachricht</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Wunschtermin, Adresse, Besonderheiten... " className="w-full bg-surface-2 border border-line-strong rounded-md py-2.75 px-3 min-h-22.5 text-silver-100 text-[14px] outline-none transition-colors focus:border-accent"></textarea>
              </div>
              <button type="submit" disabled={status === 'sending'} className="py-2.75 px-5.5 font-heading border border-transparent tracking-[0.02em] leading-[1.6] text-[13px] font-semibold text-on-accent bg-linear-110 from-accent-light to-accent rounded-md w-3/4 md:w-1/3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-[length:220%_100%] bg-[linear-gradient(110deg,var(--color-accent)_0%,var(--color-accent-light)_50%,var(--color-accent)_100%)] hover:animate-sweep-fast hover:border-accent">
                {status === 'sending' ? 'Wird gesendet...' : 'Anfrage senden'}
              </button>

              {status === 'success' && (
                <p className="text-sm text-accent">Danke! Wir melden uns innerhalb eines Tages.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">Etwas ist schiefgelaufen. Bitte versuch es erneut.</p>
              )}

            </form>
            <div className="flex flex-col gap-6">
              <div className="bg-surface border border-line rounded-xl p-6 flex flex-col">
                <h4 className="font-heading font-semibold text-sm text-silver-100 mb-4">
                  Einzugsgebiet
                </h4>
                <p className="text-[13.5px] text-silver-400">
                  Versmold (33775) und Umgebung. Bei größerer Entfernung einfach anfragen.
                </p>
              </div>
              <div className="bg-surface border border-line rounded-xl p-6 flex flex-col">
                <h4 className="font-heading font-semibold text-sm text-silver-100 mb-3">
                  Folge StanisDetail
                </h4>
                <p className="text-[13.5px] text-silver-400">
                  Vorher-Nachher-Ergebnisse auf Instagram und TikTok.
                </p>
                <div className="flex gap-3 mt-3.5">
                  <Link href={"https://www.instagram.com/stanisdetail"} target="_blank" rel="noopener noreferrer" className="border border-line rounded-md py-2.75 px-3.5 text-[13px] text-silver-300 transition-colors hover:border-accent">@stanisdetail · Instagram</Link>
                </div>
                <div className="flex gap-3 mt-3.5">
                  <Link href={"https://www.tiktok.com/@stanisdetail"} target="_blank" rel="noopener noreferrer" className="border border-line rounded-md py-2.75 px-3.5 text-[13px] text-silver-300 transition-colors hover:border-accent">@stanisdetail · TikTok</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}