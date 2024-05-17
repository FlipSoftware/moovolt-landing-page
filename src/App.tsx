import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

export default function App() {
    const { toast } = useToast();

    function getCurrentYear(): number {
        const currentDate = new Date();
        return currentDate.getFullYear();
    }

    function getCurrentTime(): string {
        const currentDate = new Date();
        return currentDate.toLocaleDateString();
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-linear bg-gradient-from-black bg-gradient-to-transparent">
            <div className="grid">
                <nav className="sticky top-0 z-10 w-full bg-background bg-op-50 backdrop-blur">
                    <div className="grid-place-content-center <sm:(grid-center gap-40) h-[60px] px-32 <sm:px-0">
                        <div className="grid grid-flow-col w-full space-x-4">
                            <a
                                href="#"
                                className="brightness-50 <sm:place-self-center hover:(brightness-100 drop-shadow-xl drop-shadow-color-yellow-2 drop-shadow-color-op-10) focus:(brightness-100 drop-shadow-xl drop-shadow-color-yellow-2 drop-shadow-color-op-10)"
                            >
                                <img
                                    src="/moovolt-name.svg"
                                    alt="moovolt-name"
                                    className="max-w-30"
                                />
                            </a>
                            <div className="flex-justify-self-end space-x-5xl <md:space-x-4 pr-48 <lg:pr-12 <sm:pr-0">
                                <a href="#about">Sobre</a>
                                <a href="#features">Soluções</a>
                                <a href="#subscribe">Assinatura</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="px-32 <md:px-8 w-screen <md:-mt-8 overflow-hidden grid place-items-center">
                    <section className="hero-pulse">
                        <img
                            src="/ev-car-lines.webp"
                            alt="eletromobilidade"
                            className="absolute z-0 left-0"
                        />
                    </section>
                    <section className="relative z-1 w-full py-48 <lg:py-32 <md:py-8 bg-gradient-to-t bg-gradient-from-transparent bg-gradient-to-background backdrop-blur">
                        <div className="grid mt-16 ml-8 items-start grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px] gap-4 px-4 md:px-6 lg:gap-10">
                            <h1 className="text-6xl <lg:text-4xl <md:text-xl font-bold tracking-tighter col-end-1">
                                Eletromobilidade a um clique de distância
                            </h1>
                            <ul className="<md:text-sm col-end-1 text-bluegray-6">
                                <li>Histórico de atividades</li>
                                <li>Telemetria detalhada</li>
                                <li>Design moderno</li>
                            </ul>
                        </div>
                    </section>
                    <section
                        id="about"
                        className="grid w-full py-90 <lg:py-64 <md:py-24 place-items-center"
                    >
                        <Card className="p-4">
                            <div className="max-w-[1200px] grid items-center grid-flow-col <lg:grid-auto-flow-row grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]">
                                <Card className="m-4 p-8 font-montserrat text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Simplifique sua eletromobilidade em uma
                                    única plataforma
                                </Card>
                                <div className="m-8 <md:m-4 place-self-center">
                                    <img
                                        alt="EV Charger"
                                        className="rounded object-cover min-w-sm <md:min-w-16 op-80"
                                        src="/moovolt-dashboard-overview.webp"
                                    />
                                    <p className="text-muted text-center">
                                        dashboard - visão geral
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-[1200px] grid items-center grid-flow-col <lg:grid-auto-flow-row grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]">
                                <div className="m-8 <md:m-4 place-self-center">
                                    <img
                                        alt="EV Charger"
                                        className="rounded object-cover min-w-sm <md:min-w-16 op-80"
                                        src="/moovolt-dashboard-eletropostos.webp"
                                    />
                                    <p className="text-muted text-center">
                                        dashboard - últimas notificações dos
                                        eletropostos
                                    </p>
                                </div>
                                <p className="m-4 text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    O Moovolt é uma solução voltada para a
                                    utilização inteligente de espaços urbanos.
                                    Com um mapeamento de estações disponíveis
                                    para o usuário.
                                </p>
                            </div>
                            <div className="max-w-[1200px] grid items-center grid-flow-col <lg:grid-auto-flow-row grid-cols-[200px,repeat(auto-fill,minmax(15%,100px)),300px]">
                                <p className="m-4 text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Ele interliga o carregamento inteligente de
                                    veículos elétricos a soluções de
                                    carregamento em estações urbanas e estradas,
                                    permitindo reserva, informações de recarga e
                                    facilidade de pagamento.
                                </p>
                                <div className="m-8 <md:m-4 place-self-center">
                                    <img
                                        alt="EV Charger"
                                        className="rounded object-cover min-w-sm <md:min-w-16 op-80"
                                        src="/moovolt-dashboard-historico.webp"
                                    />
                                    <p className="text-muted text-center">
                                        dashboard - histórico de eletropostos
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>
                    <section
                        id="advantages"
                        className="w-full py-12 md:py-24 lg:py-32 border-t"
                    >
                        <div className="grid grid-items-center grid-justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Vantagens
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    A combinação perfeita de eficiência,
                                    segurança e escalabilidade.
                                </p>
                            </div>
                            <div className="grid w-full grid-flow-col <md:grid-flow-row grid-cols-center grid-items-start gap-6">
                                <Card className="max-h-sm aspect-9/16 p-4 space-y-8 border">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Velocidade</CardTitle>
                                            <span className="i-pajamas:dashboard m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Agilidade na hora de solicitar
                                            qualquer operação ou serviço.
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter className="flex-center">
                                        <Button
                                            variant="outline"
                                            className="active:_btn_click"
                                        >
                                            Saiba mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="max-h-sm aspect-9/16 p-4 space-y-8">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Segurança</CardTitle>
                                            <span className="i-tdesign:secured m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Altos padrões de segurança
                                            proporcionam zero preocupações.
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter className="flex-center">
                                        <Button
                                            variant="outline"
                                            className="active:_btn_click"
                                        >
                                            Saiba mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="max-h-sm aspect-9/16 p-4 space-y-8">
                                    <CardHeader>
                                        <div className="grid grid-place-items-center">
                                            <CardTitle>Escalável</CardTitle>
                                            <span className="i-carbon:chart-stacked m-4 text-4xl text-gray-6" />
                                        </div>

                                        <CardDescription>
                                            Software robusto que não desaponta
                                            em grandes picos de uso.
                                        </CardDescription>
                                    </CardHeader>

                                    <CardFooter className="flex-center">
                                        <Button
                                            variant="outline"
                                            className="active:_btn_click"
                                        >
                                            Saiba mais
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </section>

                    <section
                        id="features"
                        className="grid w-full place-items-center *:text-center py-12 md:py-24 lg:py-32 border-t space-y-16"
                    >
                        <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                            Tenha um produto eficiente e completo
                        </h2>
                        <div className="*:font-montserrat grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="aspect-square place-content-center max-h-xs">
                                <CardHeader className="items-center">
                                    <Badge
                                        variant={"secondary"}
                                        className="uppercase bg-teal-9"
                                    >
                                        Residencial
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Tenha total controle do carregamento do
                                        seu veículo em casa, incluindo acesso,
                                        consumo e telemetria da bateria.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="aspect-square place-content-center max-h-xs">
                                <CardHeader className="items-center">
                                    <Badge
                                        variant={"secondary"}
                                        className="uppercase bg-teal-9"
                                    >
                                        Condominial
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Controle o consumo de energia, cadastro
                                        de usuários residentes, reserva de vagas
                                        por horário, relatórios de consumo e
                                        cobrança individualizados para cada
                                        morador e muito mais.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="aspect-square place-content-center max-h-xs">
                                <CardHeader className="items-center">
                                    <Badge
                                        variant={"secondary"}
                                        className="uppercase bg-teal-9"
                                    >
                                        Hotéis e Pousadas
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Ofereça o mesmo gerenciamento que nos
                                        condomínios, adaptado para hóspedes.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="aspect-square place-content-center max-h-xs">
                                <CardHeader className="items-center">
                                    <Badge
                                        variant={"secondary"}
                                        className="uppercase bg-teal-9"
                                    >
                                        Frotas
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Consumo de energia local, cadastro de
                                        motoristas, reserva de vagas, relatórios
                                        de consumo e cobrança para cada
                                        motorista.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="aspect-square place-content-center max-h-xs">
                                <CardHeader className="items-center">
                                    <Badge
                                        variant={"secondary"}
                                        className="uppercase bg-teal-9"
                                    >
                                        Eletropostos
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Localize seu eletroposto em nosso
                                        ecossistema para que os usuários dos
                                        apps residenciais e de frotas possam
                                        recarregar seus veículos.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="grid-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Testado e Aprovado
                                </h2>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Nossos clientes atestam a qualidade de
                                    nossos produtos.
                                </p>
                            </div>
                            <div className="grid-center w-full grid-flow-col <md:grid-flow-row gap-6 md:grid-cols-3 md:gap-12">
                                <Card className="grid place-items-center max-w-xs p-8 flex-center w-full space-y-2">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover op-50"
                                        height="150"
                                        src="/walmir.webp"
                                        style={{
                                            aspectRatio: "150/150",
                                            objectFit: "cover",
                                        }}
                                        width="150"
                                    />
                                    <p className="text-gray-5">
                                        Walmir do Caminhão
                                        <br />
                                        (gestor de frotas)
                                    </p>
                                    <hr />
                                    <p>
                                        Com a Moov.Olt eu consigo planejar a
                                        logística, as recargas, os custos e a
                                        rota em tempo real de toda a minha
                                        equipe numa boa. O que me convenceu a
                                        testar e aderir esse sistema deles foi
                                        poder ter um banco de dados com todos os
                                        relatórios e informações num sistema de
                                        gestão integrado, feito certinho para a
                                        gestão de minhas frotas.{" "}
                                    </p>
                                </Card>
                                <Card className="grid place-items-center max-w-xs p-8 flex-center w-full space-y-2">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover op-50"
                                        height="150"
                                        src="/jurandir.webp"
                                        style={{
                                            aspectRatio: "150/150",
                                            objectFit: "cover",
                                        }}
                                        width="150"
                                    />
                                    <p className="text-gray-5">
                                        Seu Jurandir
                                        <br />
                                        (dono de eletroposto)
                                    </p>
                                    <hr />
                                    <p>
                                        Quando eu entrei para o ecossistema da
                                        Moovolt o número de clientes fazendo
                                        recargas no meu eletroposto aumentou
                                        127% e está completando apenas 3 meses.
                                    </p>
                                </Card>
                                <Card className="grid place-items-center max-w-xs p-8 flex-center w-full space-y-2">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover op-50"
                                        height="150"
                                        src="/abigail.webp"
                                        style={{
                                            aspectRatio: "150/150",
                                            objectFit: "cover",
                                        }}
                                        width="150"
                                    />
                                    <p className="text-gray-5">
                                        Abigail Hoffman
                                        <br />
                                        (empresária e usuária do app)
                                    </p>
                                    <hr />
                                    <p>
                                        Com o app da Moov.Olt eu consigo
                                        carregar meu veículo em qualquer local
                                        que eu estiver com o mesmo aplicativo
                                        que eu uso para carregar em casa. O que
                                        eu mais gosto na experiência deste
                                        serviço é acompanhar o desempenho, o
                                        consumo e a vida útil da minha bateria.{" "}
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </section>
                    <div className="bg-gradient-to-t bg-gradient-from-gray-9 rounded-lg drop-shadow-2xl">
                        <section
                            id="subscribe"
                            className="w-full py-12 md:py-24 lg:py-32"
                        >
                            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                                <div className="space-y-3">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Inscreva-se e tenha acesso a benefícios
                                        exclusivos para assinantes
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Receba atualizações e vantagens
                                        cadastrando seu e-mail
                                    </p>
                                </div>
                                <div className="flex w-full max-w-md mx-auto items-center justify-center space-x-2">
                                    <Input
                                        className="max-w-xs flex-1"
                                        placeholder="Seu e-mail"
                                        type="email"
                                    />
                                    <Button
                                        variant={"secondary"}
                                        type="submit"
                                        onClick={() => {
                                            toast({
                                                className:
                                                    "font-montserrat font-black",
                                                title: "Inscrito!",
                                                description: `registrado em ${getCurrentTime()}`,
                                                variant: "success",
                                            });
                                        }}
                                    >
                                        Inscrever
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <Toaster />
            </div>
            <footer className="w-full py-12">
                <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-10 md:flex-row">
                    <p className="text-sm tracking-wide">
                        © 2022 - {getCurrentYear()} MOOV.OLT
                    </p>
                    <div className="grid grid-cols-3 items-center justify-center gap-4 md:grid-cols-3">
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Privacidade
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Termos
                        </a>
                        <a
                            href="#"
                            className="text-sm font-medium"
                        >
                            Política
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
