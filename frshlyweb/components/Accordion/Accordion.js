import styles from './accordion.module.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AccordionContent from "./AccordionContent";

export default function Accordion({ accordion }) {


    const accordionContent = accordion.fields.accordionContent;
    const accordionItem = accordionContent.map((item, index) => {

        const category = item.fields.category;
        const title = item.fields.title;
        const content = documentToReactComponents(item.fields.content);

        return <AccordionContent key={index} category={category} title={title} content={content} />
       
    });

    return (
        <div className="container">
            <div className={styles.accordion}>
                {accordionItem}
            </div>
        </div>
    );
}