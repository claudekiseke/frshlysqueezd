import Resource from "./Resource";
import styles from './resources.module.css';

const ResourcesDirectory = ({ access, resources, overlay, filter }) => {
    const resourceItems = resources.items;
    const resourceItem =  resourceItems.map((item, index) => {
        const resourceFields = item.fields;
        if (access) {
            return <Resource key={index} access={access} overlay={overlay} resourceFields={resourceFields} filter={filter} />;
        } else {
            if (index < 3) {
            return <Resource key={index} access={access} overlay={overlay} resourceFields={resourceFields} filter={filter} />;
            }
        }
    });

    return (
        <div className={`${styles.resources}`}>
            {resourceItem}
        </div>        
    )
}

export default ResourcesDirectory;