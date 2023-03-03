import './styling/BenefitCard.css'

function BenefitCard({image,header,description}){
	return(
		<div className='BenefitCard'>
			<img src={image}/>
			<h4>{header}</h4>
			<p>{description}</p>
		</div>
	);
};

export default BenefitCard;