import Image from "next/image"

export default function Tip({ tip, language }) {

    return (
        <section className="tip">
            <div className="container">
                <div className="tip__inner inner">
                    {/* <div className="tip__img">
                        <Image loading='lazy' height={1} width={1} unoptimized={true} title={'logo'} src={'tip-background.svg'} alt={'logo'} />
                    </div> */}
                    <div className="tip__card">
                        <div className="tip__card-title title">
                            <h1>{tip.category.title}</h1>
                        </div>
                        <div className="tip__card-description info">
                            <p>{tip.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}