
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface PrimeTemporaryContent {
    enabled : boolean,
    description : string,
    sectionContent : string
}

interface SiteMaintainanceFeature {
    enabled : boolean,
    message : string,
    description : string
}
export default function TemporaryPrimeContent(){

    const {siteConfig} = useDocusaurusContext();
    const content = siteConfig?.customFields?.primeTemporaryContent as PrimeTemporaryContent | undefined;
    const maintainMsg = siteConfig?.customFields?.siteMaintainanceFeature as SiteMaintainanceFeature | undefined;
    return(
        <>
         {
            content?.enabled && (
                <section>
                    <h3>{content?.description}</h3>
                    <p>{content?.sectionContent}</p>
                </section>
            )
         }
         {
             maintainMsg?.enabled && (
                <section>
                    <h3>{maintainMsg?.message}</h3>
                    <p>{maintainMsg?.description}</p>
                </section>
             )
         }
        </>
    )
}