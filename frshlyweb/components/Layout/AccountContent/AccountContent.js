import AccountDetails from '../../Forms/AccountDetails/AccountDetails';
import SectionHeading from '../../SectionHeading/SectionHeading';
import SupportTabs from '../../SupportTabs/SupportTabs';
import styles from './accountcontent.module.css'

const AccountContent = ({ filter, accountContent, supportTabs }) => {
    const accountSections = accountContent.fields.content;
    const accountSectionsItems =  accountSections.map((item, index) => {
        let component;

        switch (item.sys.contentType.sys.id) {
            case 'accountDetails':
                component = <AccountDetails key={accountSections[index].sys.id} accountDetails={accountSections[index].fields} filter={filter} />;
                break;
                
            case 'sectionHeading':
                component = <SectionHeading key={accountSections[index].sys.id} sectionHeading={accountSections[index].fields} filter={filter} />;
                break;
    
            case 'supportTabs':
                component = <SupportTabs key={accountSections[index].sys.id} supportTabs={supportTabs} filter={filter} />;
                break;
        }
    
        return component;
    });

    return (
        <div className={styles.content}>
            {accountSectionsItems}
        </div>        
    )
}

export default AccountContent;