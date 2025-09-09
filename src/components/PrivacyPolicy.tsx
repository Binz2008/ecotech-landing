import { ReactElement } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge.jsx'
import { Shield, Lock, Eye, UserCheck, Database, Mail } from 'lucide-react'

function PrivacyPolicy(): ReactElement {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Privacy Policy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-muted-foreground">
            We are committed to protecting your personal information and your right to privacy.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <CardTitle>Information We Collect</CardTitle>
              </div>
              <CardDescription>
                We collect information you provide directly to us when you:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Contact Information:</strong> Name, email address, and phone number when you submit investment inquiries
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Communication Data:</strong> Messages and content you send through our contact forms
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Usage Information:</strong> How you interact with our website (collected via analytics)
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Database className="w-6 h-6 text-purple-600" />
                <CardTitle>How We Use Your Information</CardTitle>
              </div>
              <CardDescription>
                We use the information we collect to:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Process and respond to your investment inquiries</div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Send you information about our investment opportunities</div>
                </li>
                <li className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Improve our website and services</div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>Comply with legal obligations and protect our rights</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Lock className="w-6 h-6 text-green-600" />
                <CardTitle>Data Protection & Netlify Forms</CardTitle>
              </div>
              <CardDescription>
                Our commitment to protecting your investment inquiry data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-2 text-blue-900">Netlify Forms Integration</h4>
                  <p className="text-blue-800">
                    Our investment inquiry forms are processed through Netlify Forms, a secure form handling service. 
                    When you submit an inquiry, your information is:
                  </p>
                  <ul className="mt-2 space-y-1 text-blue-800">
                    <li>• Transmitted using SSL encryption</li>
                    <li>• Stored securely on Netlify's infrastructure</li>
                    <li>• Accessible only to authorized EcoTech personnel</li>
                    <li>• Protected by Netlify's security measures and compliance standards</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold mb-2 text-green-900">Investor Data Handling</h4>
                  <p className="text-green-800">
                    As a potential investor, your information is treated with the highest level of confidentiality:
                  </p>
                  <ul className="mt-2 space-y-1 text-green-800">
                    <li>• Investment inquiries are reviewed only by our investment team</li>
                    <li>• Your data is never sold or shared with third parties</li>
                    <li>• We maintain records in compliance with UAE investment regulations</li>
                    <li>• You may request deletion of your data at any time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6 text-orange-600" />
                <CardTitle>Your Rights</CardTitle>
              </div>
              <CardDescription>
                You have the following rights regarding your personal information:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>Access:</strong> Request a copy of the personal information we hold about you</div>
                </li>
                <li className="flex items-start space-x-3">
                  <UserCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>Correction:</strong> Request that we correct any inaccurate information</div>
                </li>
                <li className="flex items-start space-x-3">
                  <Lock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>Deletion:</strong> Request that we delete your personal information</div>
                </li>
                <li className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div><strong>Portability:</strong> Request a copy of your data in a machine-readable format</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us About Privacy</CardTitle>
              <CardDescription>
                If you have questions about this privacy policy or your personal data:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">robenedwan@ecotech.ae</div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    This privacy policy applies to all information collected through our website and 
                    investment inquiry processes. We may update this policy from time to time and will 
                    notify you of any material changes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy