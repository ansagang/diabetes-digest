import Button from "@/components/ui/button";
import Link from "next/link";

export default function InformationBlock({ language, link, title, information, list, ...props }) {
    return (
        <div className="information-block" {...props}>
            <div className="information-block__title title">
                <h1>{title}</h1>
            </div>
            <div className="information-block__content">
                {
                    information ?
                        (
                            Array.isArray(information) ?
                                (
                                    information.length > 0 ?
                                        (
                                            information.map((item, key) => (
                                                <div key={key} className="information-block__content-info info">
                                                    <p>{item}</p>
                                                </div>
                                            ))
                                        )
                                        :
                                        null
                                )
                                :
                                <div className="information-block__content-info info">
                                    <p>{information}</p>
                                </div>
                        )
                        :
                        null
                }
            </div>
            <div className="information-block__list">
                {
                    list ?
                        (
                            list.length > 0 ?
                                (
                                    list.map((item, key) => (
                                        <div key={key} className="information-block__list-info info">
                                            <p><strong>{item.main}</strong>&nbsp;{item.info}</p>
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
            {
                link ?
                    (
                        <Link href={link}>
                            <Button type='primary'>{language.app.labels.readMore}</Button>
                        </Link>
                    )
                    :
                    null
            }
        </div>
    )
}