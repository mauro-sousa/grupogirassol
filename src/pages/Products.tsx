import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Cloud,
  ArrowRight,
  Star,
  Download,
  Eye
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Products = () => {
  const products = [
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "GiraApp Mobile",
      category: "Aplicativo Móvel",
      description: "Aplicativo completo para gestão empresarial com interface intuitiva e recursos avançados.",
      features: [
        "Dashboard em tempo real",
        "Relatórios personalizados",
        "Sincronização offline",
        "Notificações push"
      ],
      price: "R$ 49,90/mês",
      rating: 4.8,
      downloads: "10K+",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "GiraWeb Platform",
      category: "Plataforma Web",
      description: "Plataforma web robusta para gerenciamento completo de projetos e equipes.",
      features: [
        "Gestão de projetos",
        "Colaboração em equipe",
        "Integrações API",
        "Analytics avançado"
      ],
      price: "R$ 99,90/mês",
      rating: 4.9,
      downloads: "5K+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "GiraData Analytics",
      category: "Business Intelligence",
      description: "Solução completa de análise de dados com dashboards interativos e insights automáticos.",
      features: [
        "Dashboards interativos",
        "Machine Learning",
        "Relatórios automáticos",
        "Previsões de tendências"
      ],
      price: "R$ 149,90/mês",
      rating: 4.7,
      downloads: "3K+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "GiraSecure",
      category: "Segurança",
      description: "Sistema avançado de segurança digital com monitoramento 24/7 e proteção multicamadas.",
      features: [
        "Monitoramento 24/7",
        "Firewall avançado",
        "Backup automático",
        "Auditoria de segurança"
      ],
      price: "R$ 79,90/mês",
      rating: 4.9,
      downloads: "8K+",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "GiraAutomation",
      category: "Automação",
      description: "Ferramenta de automação de processos para otimizar workflows e aumentar produtividade.",
      features: [
        "Workflows personalizados",
        "Integrações múltiplas",
        "Triggers automáticos",
        "Monitoramento de performance"
      ],
      price: "R$ 69,90/mês",
      rating: 4.6,
      downloads: "7K+",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&q=80"
    },
    {
      icon: <Cloud className="h-8 w-8 text-green-600" />,
      title: "GiraCloud Storage",
      category: "Armazenamento",
      description: "Solução de armazenamento em nuvem segura e escalável para empresas de todos os tamanhos.",
      features: [
        "Armazenamento ilimitado",
        "Sincronização automática",
        "Compartilhamento seguro",
        "Versionamento de arquivos"
      ],
      price: "R$ 29,90/mês",
      rating: 4.8,
      downloads: "15K+",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80"
    }
  ];

  const categories = ["Todos", "Aplicativo Móvel", "Plataforma Web", "Business Intelligence", "Segurança", "Automação", "Armazenamento"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
              Nossos Produtos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Produtos
              <span className="text-green-600"> Inovadores </span>
              para sua Empresa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra nossa linha completa de produtos digitais desenvolvidos 
              para otimizar processos e impulsionar o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "" : "hover:bg-green-50 hover:text-green-600 hover:border-green-600"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-green-600">
                    {product.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {product.icon}
                      <CardTitle className="ml-2 text-xl">{product.title}</CardTitle>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{product.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{product.downloads}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{product.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        {product.price}
                      </span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button className="flex-1" asChild>
                        <Link to="/contato">Adquirir</Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher Nossos Produtos?
            </h2>
            <p className="text-xl text-gray-600">
              Desenvolvidos com as mais modernas tecnologias e foco na experiência do usuário.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Segurança Avançada
              </h3>
              <p className="text-gray-600">
                Todos os nossos produtos seguem os mais altos padrões de segurança digital.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Performance Otimizada
              </h3>
              <p className="text-gray-600">
                Desenvolvidos para máxima performance e eficiência operacional.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Escalabilidade
              </h3>
              <p className="text-gray-600">
                Soluções que crescem junto com o seu negócio, sem limitações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Experimente nossos produtos gratuitamente por 30 dias e 
            descubra como eles podem revolucionar sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contato">
                Teste Grátis por 30 Dias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600" asChild>
              <Link to="/servicos">Ver Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;