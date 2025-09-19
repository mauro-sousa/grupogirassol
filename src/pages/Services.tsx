import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Code, 
  TrendingUp, 
  Users, 
  Settings, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-8 w-8 text-[#E8A341]" />,
      title: "Consultoria Empresarial",
      description: "Estratégias personalizadas para otimizar processos e aumentar a eficiência do seu negócio com foco em resultados sustentáveis.",
      features: [
        "Análise de processos organizacionais",
        "Planejamento estratégico empresarial",
        "Gestão de mudanças organizacionais",
        "Otimização operacional e produtividade"
      ],
      price: "A partir de R$ 2.500"
    },
    {
      icon: <Code className="h-8 w-8 text-[#E8A341]" />,
      title: "Desenvolvimento de Soluções",
      description: "Criação e desenvolvimento de soluções tecnológicas inovadoras do conceito ao lançamento no mercado.",
      features: [
        "Pesquisa e análise de mercado",
        "Design e prototipagem de soluções",
        "Desenvolvimento de sistemas",
        "Testes, validação e implementação"
      ],
      price: "A partir de R$ 5.000"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#E8A341]" />,
      title: "Marketing e Crescimento",
      description: "Estratégias digitais completas para aumentar sua presença online, gerar leads qualificados e impulsionar vendas.",
      features: [
        "SEO e marketing de conteúdo",
        "Gestão de redes sociais",
        "Campanhas de email marketing",
        "Analytics e relatórios de performance"
      ],
      price: "A partir de R$ 1.800"
    },
    {
      icon: <Users className="h-8 w-8 text-[#E8A341]" />,
      title: "Gestão de Projetos",
      description: "Gerenciamento profissional de projetos com metodologias ágeis, garantindo entregas no prazo e dentro do orçamento.",
      features: [
        "Metodologias ágeis (Scrum/Kanban)",
        "Controle de qualidade rigoroso",
        "Gestão de riscos e contingências",
        "Relatórios de progresso em tempo real"
      ],
      price: "A partir de R$ 3.200"
    },
    {
      icon: <Settings className="h-8 w-8 text-[#E8A341]" />,
      title: "Automação de Processos",
      description: "Implementação de soluções automatizadas para reduzir custos operacionais e aumentar significativamente a produtividade.",
      features: [
        "Análise detalhada de workflows",
        "Implementação de sistemas integrados",
        "Treinamento completo de equipes",
        "Suporte técnico contínuo"
      ],
      price: "A partir de R$ 4.000"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#E8A341]" />,
      title: "Business Intelligence",
      description: "Transforme dados em insights valiosos para tomada de decisões estratégicas e crescimento sustentável do negócio.",
      features: [
        "Dashboards interativos personalizados",
        "Análise avançada de dados",
        "Relatórios executivos customizados",
        "Previsões e análise de tendências"
      ],
      price: "A partir de R$ 3.500"
    },
    {
      icon: <Target className="h-8 w-8 text-[#E8A341]" />,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de planos estratégicos abrangentes para posicionar sua empresa no mercado e alcançar objetivos de longo prazo.",
      features: [
        "Análise de mercado e concorrência",
        "Definição de objetivos e metas",
        "Roadmap de implementação",
        "Monitoramento e ajustes contínuos"
      ],
      price: "A partir de R$ 4.500"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#E8A341]" />,
      title: "Inovação e Transformação",
      description: "Programas de inovação para transformar sua empresa, implementando novas tecnologias e processos disruptivos.",
      features: [
        "Workshops de design thinking",
        "Implementação de novas tecnologias",
        "Cultura de inovação organizacional",
        "Acompanhamento de resultados"
      ],
      price: "A partir de R$ 6.000"
    },
    {
      icon: <Shield className="h-8 w-8 text-[#E8A341]" />,
      title: "Compliance e Governança",
      description: "Estruturação de processos de compliance e governança corporativa para garantir conformidade e mitigar riscos.",
      features: [
        "Auditoria de processos internos",
        "Implementação de controles",
        "Treinamento em compliance",
        "Monitoramento contínuo"
      ],
      price: "A partir de R$ 3.800"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Análise Inicial",
      description: "Entendemos suas necessidades e objetivos específicos através de reuniões detalhadas."
    },
    {
      step: "02",
      title: "Proposta Personalizada",
      description: "Desenvolvemos uma solução sob medida para seu negócio com cronograma e investimento."
    },
    {
      step: "03",
      title: "Implementação",
      description: "Executamos o projeto com acompanhamento constante e comunicação transparente."
    },
    {
      step: "04",
      title: "Suporte Contínuo",
      description: "Oferecemos suporte e otimizações após a entrega para garantir resultados duradouros."
    }
  ];

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
              Nossos Serviços
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Soluções
              <span className="text-[#E8A341]"> Completas </span>
              para seu Negócio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços especializados para 
              impulsionar o crescimento e a eficiência da sua empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-1 border-t-4 border-t-[#E8A341]">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {service.icon}
                      </motion.div>
                      <CardTitle className="ml-3 text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-[#E8A341] mr-2" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-lg font-semibold text-[#E8A341] mb-4">
                        {service.price}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-[#E8A341] hover:bg-[#D4941F] text-white" asChild>
                          <Link to="/contato">Solicitar Orçamento</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600">
              Nosso processo estruturado garante resultados excepcionais.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process.map((item, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="relative mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-[#E8A341] rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </motion.div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-orange-200 -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#E8A341]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Projetos Concluídos" },
              { number: "150+", label: "Clientes Satisfeitos" },
              { number: "98%", label: "Taxa de Sucesso" },
              { number: "24/7", label: "Suporte Disponível" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Pronto para Começar seu Projeto?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e receba uma proposta 
              personalizada para suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild className="bg-[#E8A341] hover:bg-[#D4941F] text-white">
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" asChild className="border-[#E8A341] text-[#E8A341] hover:bg-[#E8A341] hover:text-white">
                  <Link to="/produtos">Ver Nossos Produtos</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;