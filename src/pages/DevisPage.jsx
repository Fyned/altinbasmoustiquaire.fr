import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ChevronLeft, ChevronRight, Phone, MessageCircle, Shield, Clock } from 'lucide-react'
import PageWrapper from '../components/layout/PageWrapper'
import Input from '../components/ui/Input'
import { COMPANY } from '../lib/constants'
import { sendDevisRequest } from '../services/emailService'
import { cn } from '../lib/utils'

const stepSchemas = [
  z.object({
    projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
    quantity: z.coerce.number().min(1, 'Minimum 1').max(50, 'Maximum 50'),
  }),
  z.object({
    width: z.coerce.number().min(20, 'Minimum 20 cm').max(600, 'Maximum 600 cm'),
    height: z.coerce.number().min(20, 'Minimum 20 cm').max(300, 'Maximum 300 cm'),
    color: z.string().min(1, 'Veuillez choisir une couleur'),
    floor: z.string().optional(),
    comments: z.string().optional(),
  }),
  z.object({
    name: z.string().min(2, 'Minimum 2 caractères'),
    phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
    email: z.string().email('Email invalide'),
    city: z.string().min(2, 'Veuillez indiquer votre ville'),
    postalCode: z.string().regex(/^\d{5}$/, 'Code postal à 5 chiffres'),
    rgpd: z.literal(true, { errorMap: () => ({ message: 'Vous devez accepter la politique de confidentialité' }) }),
  }),
]

const projectTypes = [
  { value: 'fenetre', label: 'Moustiquaire Fenêtre' },
  { value: 'porte-fenetre', label: 'Moustiquaire Porte-Fenêtre' },
  { value: 'baie-vitree', label: 'Moustiquaire Baie Vitrée' },
]

const colors = [
  { value: 'blanc', label: 'Blanc (RAL 9016)' },
  { value: 'gris-anthracite', label: 'Gris Anthracite (RAL 7016)' },
  { value: 'marron', label: 'Marron (RAL 8014)' },
  { value: 'beige', label: 'Beige (RAL 1015)' },
  { value: 'noir', label: 'Noir (RAL 9005)' },
]

const floors = [
  { value: 'rdc', label: 'Rez-de-chaussée' },
  { value: '1er', label: '1er étage' },
  { value: '2eme', label: '2ème étage' },
  { value: '3eme+', label: '3ème étage et +' },
]

const stepTitles = ['Votre Projet', 'Détails', 'Vos Coordonnées', 'Récapitulatif']

export default function DevisPage() {
  const [step, setStep] = useState(0)
  const [allData, setAllData] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const currentSchema = step < 3 ? stepSchemas[step] : z.object({})
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: allData,
  })

  async function onNext(data) {
    const merged = { ...allData, ...data }
    setAllData(merged)

    if (step < 3) {
      setStep(step + 1)
    } else {
      setSubmitting(true)
      await sendDevisRequest(merged)
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <PageWrapper seoKey="devis">
        <div className="py-24 md:py-32">
          <div className="max-w-lg mx-auto px-4 text-center">
            <CheckCircle size={64} className="text-success mx-auto mb-6" />
            <h1 className="font-heading font-bold text-3xl text-charcoal mb-4">Demande Envoyée !</h1>
            <p className="text-charcoal-light mb-8">
              Merci pour votre demande de devis. Nous vous répondrons sous 24 heures.
            </p>
            <a href="/" className="px-6 py-3 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors">
              Retour à l'accueil
            </a>
          </div>
        </div>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper seoKey="devis">
      <section className="py-12 md:py-16 bg-beige">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-2">
            Devis Gratuit
          </h1>
          <p className="text-charcoal-light text-center mb-8">
            Remplissez le formulaire ci-dessous, nous vous répondons sous 24h.
          </p>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-between mb-2">
              {stepTitles.map((title, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors',
                    i <= step ? 'bg-primary-400 text-white' : 'bg-sand text-charcoal-light'
                  )}>
                    {i + 1}
                  </div>
                  <span className="text-xs text-charcoal-light mt-1 hidden sm:block">{title}</span>
                </div>
              ))}
            </div>
            <div className="h-1 bg-sand rounded-full">
              <div
                className="h-full bg-primary-400 rounded-full transition-all duration-500"
                style={{ width: `${((step + 1) / 4) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit(onNext)} className="bg-cream rounded-2xl p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 0 && (
                      <div className="space-y-6">
                        <h2 className="font-heading font-semibold text-xl text-charcoal">Type de Projet</h2>
                        <Input name="projectType" label="Type d'ouverture" options={projectTypes} register={register} error={errors.projectType?.message} />
                        <Input name="quantity" label="Nombre d'ouvertures" type="number" placeholder="1" register={register} error={errors.quantity?.message} />
                      </div>
                    )}
                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className="font-heading font-semibold text-xl text-charcoal">Dimensions & Options</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input name="width" label="Largeur (cm)" type="number" placeholder="120" register={register} error={errors.width?.message} />
                          <Input name="height" label="Hauteur (cm)" type="number" placeholder="150" register={register} error={errors.height?.message} />
                        </div>
                        <Input name="color" label="Couleur souhaitée" options={colors} register={register} error={errors.color?.message} />
                        <Input name="floor" label="Étage (optionnel)" options={floors} register={register} />
                        <Input name="comments" label="Commentaires (optionnel)" textarea placeholder="Précisions sur votre projet..." register={register} />
                      </div>
                    )}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="font-heading font-semibold text-xl text-charcoal">Vos Coordonnées</h2>
                        <Input name="name" label="Nom complet" placeholder="Jean Dupont" register={register} error={errors.name?.message} />
                        <Input name="phone" label="Téléphone" type="tel" placeholder="06 00 00 00 00" register={register} error={errors.phone?.message} />
                        <Input name="email" label="Email" type="email" placeholder="jean@exemple.fr" register={register} error={errors.email?.message} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Input name="city" label="Ville" placeholder="Grenoble" register={register} error={errors.city?.message} />
                          <Input name="postalCode" label="Code postal" placeholder="38000" register={register} error={errors.postalCode?.message} />
                        </div>
                        <label className="flex items-start gap-3">
                          <input type="checkbox" {...register('rgpd')} className="mt-1 accent-primary-400" />
                          <span className="text-xs text-charcoal-light">
                            J'accepte que mes données soient traitées conformément à la <a href="/politique-confidentialite" className="text-primary-400 underline">politique de confidentialité</a>.
                          </span>
                        </label>
                        {errors.rgpd && <p className="text-sm text-error">{errors.rgpd.message}</p>}
                      </div>
                    )}
                    {step === 3 && (
                      <div className="space-y-4">
                        <h2 className="font-heading font-semibold text-xl text-charcoal mb-4">Récapitulatif</h2>
                        <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
                          <p><span className="font-medium">Projet :</span> {allData.projectType} × {allData.quantity}</p>
                          <p><span className="font-medium">Dimensions :</span> {allData.width} × {allData.height} cm</p>
                          <p><span className="font-medium">Couleur :</span> {allData.color}</p>
                          {allData.floor && <p><span className="font-medium">Étage :</span> {allData.floor}</p>}
                          {allData.comments && <p><span className="font-medium">Commentaires :</span> {allData.comments}</p>}
                          <hr className="border-sand" />
                          <p><span className="font-medium">Nom :</span> {allData.name}</p>
                          <p><span className="font-medium">Tél :</span> {allData.phone}</p>
                          <p><span className="font-medium">Email :</span> {allData.email}</p>
                          <p><span className="font-medium">Ville :</span> {allData.city} ({allData.postalCode})</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  {step > 0 ? (
                    <button type="button" onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 text-charcoal-light hover:text-charcoal transition-colors">
                      <ChevronLeft size={18} /> Précédent
                    </button>
                  ) : <div />}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 bg-primary-400 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors shadow-button disabled:opacity-60 inline-flex items-center gap-2"
                  >
                    {step === 3 ? (submitting ? 'Envoi...' : 'Envoyer ma demande') : 'Suivant'}
                    {step < 3 && <ChevronRight size={18} />}
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-4">Pourquoi un devis ?</h3>
                <ul className="space-y-3 text-sm text-charcoal-light">
                  <li className="flex items-start gap-3"><Shield size={18} className="text-primary-400 flex-shrink-0 mt-0.5" /> 100% gratuit et sans engagement</li>
                  <li className="flex items-start gap-3"><Clock size={18} className="text-primary-400 flex-shrink-0 mt-0.5" /> Réponse sous 24 heures</li>
                  <li className="flex items-start gap-3"><CheckCircle size={18} className="text-primary-400 flex-shrink-0 mt-0.5" /> Prix exact, pas de surprises</li>
                </ul>
              </div>
              <div className="bg-charcoal rounded-2xl p-6 text-white">
                <h3 className="font-heading font-semibold text-lg mb-4">Besoin d'aide ?</h3>
                <div className="space-y-3">
                  <a href={`tel:${COMPANY.phone.devisRaw}`} className="flex items-center gap-3 text-sm text-white/80 hover:text-primary-200 transition-colors">
                    <Phone size={18} className="text-primary-400" /> {COMPANY.phone.devis}
                  </a>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-primary-200 transition-colors">
                    <MessageCircle size={18} className="text-whatsapp" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
