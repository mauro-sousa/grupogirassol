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
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Products = () => {
  const products = [
    {
      icon: <Smartphone className="h-8 w-8 text-[#E8A341]" />,
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
      icon: <Globe className="h-8 w-8 text-[#E8A341]" />,
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
      icon: <Database className="h-8 w-8 text-[#E8A341]" />,
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
      icon: <Shield className="h-8 w-8 text-[#E8A341]" />,
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
      icon: <Zap className="h-8 w-8 text-[#E8A341]" />,
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
      icon: <Cloud className="h-8 w-8 text-[#E8A341]" />,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-orange-100 text-[#E8A341] hover:bg-orange-100 border-[#E8A341]">
              Nossos Produtos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Produtos
              <span className="text-[#E8A341]"> Inovadores </span>
              para sua Empresa
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra nossa linha completa de produtos digitais desenvolvidos 
              para otimizar processos e impulsionar o crescimento do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-[#E8A341] hover:bg-[#D4941F] text-white" : "hover:bg-orange-50 hover:text-[#E8A341] hover:border-[#E8A341]"}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-[#E8A341] border-[#E8A341]">
                      {product.category}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {product.icon}
                        </motion.div>
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
                          <div className="w-1.5 h-1.5 bg-[#E8A341] rounded-full mr-2"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-[#E8A341]">
                          {product.price}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <motion.div 
                          className="flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button className="w-full bg-[#E8A341] hover:bg-[#D4941F] text-white" asChild>
                            <Link to="/contato">Adquirir</Link>
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button variant="outline" size="sm" className="border-[#E8A341] text-[#E8A341] hover:bg-[#E8A341] hover:text-white">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher Nossos Produtos?
            </h2>
            <p className="text-xl text-gray-600">
              Desenvolvidos com as mais modernas tecnologias e foco na experiência do usuário.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Shield className="h-8 w-8 text-[#E8A341]" />,
                title: "Segurança Avançada",
                description: "Todos os nossos produtos seguem os mais altos padrões de segurança digital."
              },
              {
                icon: <Zap className="h-8 w-8 text-[#E8A341]" />,
                title: "Performance Otimizada",
                description: "Desenvolvidos para máxima performance e eficiência operacional."
              },
              {
                icon: <Cloud className="h-8 w-8 text-[#E8A341]" />,
                title: "Escalabilidade",
                description: "Soluções que crescem junto com o seu negócio, sem limitações."
              }
            ].map((feature, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E8A341]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Experimente nossos produtos gratuitamente por 30 dias e 
              descubra como eles podem revolucionar sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contato">
                    Teste Grátis por 30 Dias
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#E8A341]" asChild>
                  <Link to="/servicos">Ver Nossos Serviços</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;