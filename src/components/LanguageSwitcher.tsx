import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'

interface LanguageSwitcherProps {
  className?: string
  variant?: 'default' | 'outline' | 'ghost'
}

function LanguageSwitcher({ className = '', variant = 'outline' }: LanguageSwitcherProps): ReactElement {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const currentLang = i18n.language
    const newLang = currentLang === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
    
    // Update HTML dir attribute for RTL support
    document.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLang
  }

  const getCurrentLanguageLabel = () => {
    return i18n.language === 'en' ? 'العربية' : 'English'
  }

  return (
    <Button
      variant={variant}
      size="sm"
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 ${className}`}
      aria-label={`Switch to ${getCurrentLanguageLabel()}`}
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm">{getCurrentLanguageLabel()}</span>
    </Button>
  )
}

export default LanguageSwitcher