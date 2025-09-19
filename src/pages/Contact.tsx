import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Building
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Telefone",
      details: [
        "(11) 9999-9999",
        "(11) 8888-8888"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "E-mail",
      details: [
        "contato@grupogirassol.com",
        "vendas@grupogirassol.com"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-600" />,
      title: "Endereço",
      details: [
        "Av. Paulista, 1000",
        "São Paulo, SP - 01310-100"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Horário de Atendimento",
      details: [
        "Segunda a Sexta: 8h às 18h",
        "Sábado: 8h às 12h"
      ]
    }
  ];

  const services = [
    "Consultoria Empresarial",
    "Desenvolvimento de Produtos",
    "Marketing Digital",
    "Gestão de Projetos",
    "Automação de Processos",
    "Business Intelligence",
    "Outros"
  ];

  const stats = [
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      number: "< 2h",
      label: "Tempo de Resposta"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      number: "150+",
      label: "Clientes Atendidos"
    },
    {
      icon: <Building className="h-8 w-8 text-green-600" />,
      number: "24/7",
      label: "Suporte Disponível"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Entre em Contato
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Vamos
              <span className="text-green-600"> Conversar </span>
              sobre seu Projeto
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos prontos para ajudar você a transformar suas ideias em realidade. 
              Entre em contato conosco e receba uma proposta personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                  <p className="text-gray-600">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre seu projeto ou necessidade..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Nosso Compromisso
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg">
                      {stat.icon}
                      <div className="ml-4">
                        <div className="text-2xl font-bold text-green-600">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-600">
              Visite nosso escritório no coração de São Paulo.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Av. Paulista, 1000
                </h3>
                <p className="text-gray-600">
                  São Paulo, SP - 01310-100
                </p>
                <Button className="mt-4" variant="outline">
                  Ver no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas para as dúvidas mais comuns dos nossos clientes.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Qual é o prazo médio para desenvolvimento de um projeto?
                </h3>
                <p className="text-gray-600">
                  O prazo varia conforme a complexidade do projeto, mas geralmente 
                  nossos projetos são entregues entre 2 a 8 semanas.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vocês oferecem suporte após a entrega?
                </h3>
                <p className="text-gray-600">
                  Sim, oferecemos suporte técnico completo por 90 dias após a entrega, 
                  além de planos de manutenção contínua.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Como funciona o processo de orçamento?
                </h3>
                <p className="text-gray-600">
                  Após o primeiro contato, agendamos uma reunião para entender suas 
                  necessidades e apresentamos uma proposta personalizada em até 48 horas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;