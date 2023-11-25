import SlpAccordion from "@/components/accordion";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

export default function BlogPage() {
	const t = useTranslations('Faqs');

	const contentList = ['f1', 'f2', 'f3', 'f4'];
	const content = contentList.map((content) => {
		return {
			key: content,
			title: t(`faqsTableBody.${content}.question`),
			text: t(`faqsTableBody.${content}.answer`)
		}
	});

	return (
		<>
			<div className="flex flex-col">
				<FontAwesomeIcon icon={faLightbulb} className="text-danger-500 text-6xl mb-10" />
				<h1 className="bg-gradient-to-b w-full font-bold text-4xl text-center
						   lg:text-5xl h-14 md:h-20 from-danger-500 to-secondary-300
						   bg-clip-text text-transparent">
					{t('title')}
				</h1>
			</div>
			<div className="text-left mt-10">
				<SlpAccordion content={content}/>
			</div>
		</>
	);
}
