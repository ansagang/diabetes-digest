import Image from "next/image"

export default function Team({ language, team }) {
    return (
        <section className="team">
            <div className="container">
                <div className="team__inner inner">
                    <div className="team__title title">
                        <h1>{language.app.sections.team.title}</h1>
                    </div>
                    <div className="team__list">
                        {
                            team ?
                                (
                                    team.length > 0 ?
                                        (
                                            team.map((member, key) => (
                                                <div className="team__member" key={key}>
                                                    <div className="team__member-img">
                                                        <Image loading='lazy' height={1} width={1} unoptimized={true} title={'logo'} src={''} alt={'logo'} />
                                                    </div>
                                                    <div className="team__member-information">
                                                        <div className="team__member-name title">
                                                            <h3>{member.fullname}</h3>
                                                        </div>
                                                        <div className="team__member-role info">
                                                            <p>{member.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        )
                                        :
                                        null
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}