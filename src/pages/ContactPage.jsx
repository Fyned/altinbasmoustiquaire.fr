import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Phone, Truck, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import Input from '../components/ui/Input'
import { COMPANY } from '../lib/constants'
import { sendContactMessage } from '../services/emailService'
import AnimatedSection from '../components/common/AnimatedSection'

const schema = z.object({
  name: z.string().min(2, 'Minimum 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Minimum 10 caractères'),
})

const subjects = [
  { value: 'devis', label: 'Demande de devis' },
  { value: 'info', label: 'Demande d\'information' },
  { value: 'sav', label: 'Service après-vente' },
  { value: 'autre', label: 'Autre' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  async function onSubmit(data) {
    await sendContactMessage(data)
    setSent(true)
  }

  return (
    <PageWrapper seoKey="contact">
      <section className="py-16 md:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal section-heading-center">
              Contactez-Nous
            </h1>
            <p className="mt-6 text-charcoal-light text-lg max-w-2xl mx-auto">
              Une question ? Un projet ? N'hésitez pas à nous contacter, nous vous répondons rapidement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Form */}
            <AnimatedSection>
              {sent ? (
                <div className="bg-cream rounded-2xl p-8 text-center">
                  <CheckCircle size={48} className="text-success mx-auto mb-4" />
                  <h2 className="font-heading font-semibold text-2xl text-charcoal mb-2">Message envoyé !</h2>
                  <p className="text-charcoal-light">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-cream rounded-2xl p-6 md:p-8 space-y-5">
                  <h2 className="font-heading font-semibold text-xl text-charcoal mb-2">Formulaire de Contact</h2>
                  <Input name="name" label="Nom complet" placeholder="Jean Dupont" register={register} error={errors.name?.message} />
                  <Input name="email" label="Email" type="email" placeholder="jean@exemple.fr" register={register} error={errors.email?.message} />
                  <Input name="phone" label="Téléphone (optionnel)" type="tel" placeholder="06 00 00 00 00" register={register} />
                  <Input name="subject" label="Sujet" options={subjects} register={register} error={errors.subject?.message} />
                  <Input name="message" label="Message" textarea placeholder="Votre message..." register={register} error={errors.message?.message} />
                  <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-button disabled:opacity-60">
                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="bg-cream rounded-2xl p-6 md:p-8">
                  <h2 className="font-heading font-semibold text-xl text-charcoal mb-6">Nos Coordonnées</h2>
                  <ul className="space-y-4">
                    <li><a href={`tel:${COMPANY.phone.devisRaw}`} className="flex items-center gap-4 text-charcoal hover:text-primary-400 transition-colors">
                      <Phone size={20} className="text-primary-400" />
                      <div><p className="font-medium">{COMPANY.phone.devis}</p><p className="text-xs text-charcoal-light">Devis & RDV</p></div>
                    </a></li>
                    <li><a href={`tel:${COMPANY.phone.livraisonRaw}`} className="flex items-center gap-4 text-charcoal hover:text-primary-400 transition-colors">
                      <Truck size={20} className="text-primary-400" />
                      <div><p className="font-medium">{COMPANY.phone.livraison}</p><p className="text-xs text-charcoal-light">Livraison & Pose</p></div>
                    </a></li>
                    <li><a href={`mailto:${COMPANY.email}`} className="flex items-center gap-4 text-charcoal hover:text-primary-400 transition-colors">
                      <Mail size={20} className="text-primary-400" /> {COMPANY.email}
                    </a></li>
                    <li className="flex items-start gap-4 text-charcoal">
                      <MapPin size={20} className="text-primary-400 flex-shrink-0 mt-0.5" />
                      <span>{COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}</span>
                    </li>
                    <li className="flex items-start gap-4 text-charcoal">
                      <Clock size={20} className="text-primary-400 flex-shrink-0 mt-0.5" />
                      <div><p>Lundi — Vendredi : 8h00 — 18h00</p><p>Samedi : Sur rendez-vous</p></div>
                    </li>
                  </ul>
                </div>

                {/* Google Maps */}
                <div className="bg-cream rounded-2xl overflow-hidden">
                  <iframe
                    title="ALTINBAS Moustiquaire — Pont-Évêque"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.2!2d4.8683!3d45.5264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z45.5264,4.8683!5e0!3m2!1sfr!2sfr!4v1"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-none"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
