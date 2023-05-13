import Image from 'next/image';
import Signature from './Signature';
import styles from './team.module.css';

const Team = ({ team }) => {
    const teamMembers = team.fields.teamMembers;
    const teamMember = teamMembers.map((item, index) => {
        const fields = item.fields
        const font = fields.signatureFont;
        const fontSize = fields.FontSize;
        const name = fields.name;
        const role = fields.role;
        const avatarFields = fields.avatar.fields.file;
        const avatar = avatarFields.url;
        const width = avatarFields.details.image.width;
        const height = avatarFields.details.image.height;
        const alt  = fields.avatarAltText;

        return (
            <div key={index} className={styles.teamMember}>
                <Image
                    src={`https:${avatar}`}
                    width={width}
                    height={height}
                    alt={alt}
                />
                <Signature styles={styles} font={font} fontSize={fontSize} name={name} />
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.role}>{role}</p>
            </div>
        )
    });

    return (
        <div className={styles.teamMembers}>
                {teamMember}
        </div>
    )

}

export default Team;