import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentMedical, faBookOpen, faHeartPulse } from '@fortawesome/free-solid-svg-icons';

import {useTranslations} from 'next-intl';
import { Divider } from '@nextui-org/divider';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import SlpTable from '@/components/table';

export default function Home() {
	const t = useTranslations('Home');
	const servicesList = ['s1', 's2', 's3', 's4', 's5', 's6', 's7'];
	const servicesColumns = [
		{
			key: 'service',
			label: t('servicesTableHeader.service')
		},
		{
			key: 'description',
			label: t('servicesTableHeader.description')
		},
	];

	const servicesRows = servicesList.map((service) => {
		return {
			key: service,
			service: t(`servicesTableBody.${service}.service`),
			description: t(`servicesTableBody.${service}.description`)
		}
	});

	return (
		<section className="flex flex-col items-center gap-4 py-8 md:py-10">
			<div className="flex justify-center lg:flex-nowrap flex-wrap items-center lg:mb-40 mb-20">
				<div className="relative lg:mr-16 mr-0 lg:mb-0 mb-20">
					<div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-danger-600 via-warning-600 to-secondary-600 opacity-50 blur-2xl"/>
					<div className="relative flex h-64 w-64 items-center justify-center rounded-lg bg-default-50">
						<FontAwesomeIcon icon={faCommentMedical} className="text-foreground-900 text-9xl" />
					</div>
				</div>
				<div>
					<h1 className="
						bg-gradient-to-r lg:text-left text-center font-bold text-4xl
						lg:text-5xl h-14 md:h-20 from-danger-500 to-secondary-300
						bg-clip-text text-transparent">
						{t('title')}
					</h1>
					<h2 className="text-xl md:text-2xl lg:ml-20 ml-0">
						{t('subtitle')}
					</h2>
				</div>
			</div>

			<div className="flex flex-col w-full lg:mb-40 mb-20">
				<div className="flex flex-row gap-4 mb-5">
					<FontAwesomeIcon icon={faBookOpen} className="text-secondary-500 text-2xl lg:text-4xl" />
					<h1 className="
						bg-gradient-to-r lg:text-left text-center font-bold text-2xl
						lg:text-4xl h-14 from-secondary-500 to-primary-200
						bg-clip-text text-transparent">
						{t('history')}
					</h1>
				</div>
				<div className="lg:grid gap-10 lg:grid-cols-2 lg:grid-rows-1 flex flex-col">
					<Card className="bg-secondary-50">
						<CardHeader className="flex gap-3">
							<p className="font-bold text-lg italic">
							{t('earlyHistoryTitle')}
							</p>
						</CardHeader>
						<Divider/>
						<CardBody>
							<p>
							{t('earlyHistoryText')}
							</p>
						</CardBody>
						<Divider/>
					</Card>

					<Card className="bg-secondary-50">
						<CardHeader className="flex gap-3">
							<p className='font-bold text-lg italic'>
							{t('lateHistoryTitle')}
							</p>
						</CardHeader>
						<Divider/>
						<CardBody>
							<p>
							{t('lateHistoryText')}
							</p>
						</CardBody>
						<Divider/>
					</Card>
				</div>
			</div>

			<div className="flex flex-col w-full lg:mb-40 mb-20">
				<div className="flex flex-row gap-4 mb-5">
					<FontAwesomeIcon icon={faHeartPulse} className="text-primary-500 text-2xl lg:text-4xl" />
					<h1 className="
						bg-gradient-to-r lg:text-left text-center font-bold text-2xl
						lg:text-4xl h-14 from-primary-500 to-success-200
						bg-clip-text text-transparent">
						{t('servicesTitle')}
					</h1>
				</div>
				<div>
					<SlpTable columns={servicesColumns} rows={servicesRows} />
				</div>
			</div>
		</section>
	);
}