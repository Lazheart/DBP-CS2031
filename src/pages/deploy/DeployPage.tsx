import IntroAdvice from "../../components/IntroAdvice";
import ModuleHeader from "../../components/PageHeader";

const DeployPage = () => {

    return (
        <div className="deployment-page">
            <ModuleHeader
                lesson={{
                topic: "Deployment",
                title: "Despliega tu aplicación",
                }}
            />
            <IntroAdvice />

            <div className="deployment-content"></div>
        </div>
    )
}

export default DeployPage;