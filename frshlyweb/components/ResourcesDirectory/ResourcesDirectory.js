import Resource from "./Resource";
import styles from './resources.module.css';

const ResourcesDirectory = ({ resources, overlay, filter }) => {

    const resourceItems = resources.items;
    const resourceItem =  resourceItems.map((item, index) => {
        const resourceFields = item.fields;
        return <Resource key={index} overlay={overlay} resourceFields={resourceFields} filter={filter} />;
    });

    return (
        <div className={styles.resources}>
            {resourceItem}
        </div>        
    )
}

export default ResourcesDirectory;