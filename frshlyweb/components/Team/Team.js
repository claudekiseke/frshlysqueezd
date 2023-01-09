import Image from 'next/image';
import myImageLoader from '../../public/loader';
import styles from './team.module.css';

const Team = ({ team }) => {
    const teamMembers = team.fields.teamMembers;
    const teamMember = teamMembers.map((item, index) => {
        const name = item.fields.name;
        const role = item.fields.role;
        const avatar = item.fields.avatar.fields.file.url;
        const width = item.fields.avatar.fields.file.details.image.width;
        const height = item.fields.avatar.fields.file.details.image.height;
        const alt  = item.fields.avatar.fields.file.title;

        return (
            <div key={index} className={styles.teamMember}>
                <Image
                    src={`https:${avatar}`}
                    width={width}
                    height={height}
                    alt={alt}
                    loader={myImageLoader}
                />
                <h4 className={styles.signature}>{name}</h4>
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.role}>{role}</p>
            </div>
        )
    });

    return (
        <div className={`container ${styles.teamMembers}`}>
                {teamMember}
        </div>
    )

}

export default Team;