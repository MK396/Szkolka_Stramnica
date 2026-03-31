<template>
	<section class="opis-container" id="o-nas">
		<h2>Piekne ogrody zaczynają się tutaj - Stramnica</h2>
		<div class="opis-text-img">
			<div class="opis-text">
				<p>Gospodarstwo szkółkarskie Szkółka Stramnica to rodzinny biznes z pasją, który powstał w  1994 roku. Znajdujemy się w miejscowości Stramnica, niedaleko Kołobrzegu. Specjalizujemy się w uprawie roślin ozdobnych, które dodadzą uroku każdemu ogrodowi. Nasza oferta obejmuje różnorodne krzewy, drzewa i byliny starannie wyselekcjonowane i pielęgnowane. Dzięki wieloletniemu doświadczeniu gwarantujemy najwyższą jakość naszych roślin.</p>
				<p>Wierzymy, że natura jest najpiękniejszym artystą, a my jesteśmy tylko jej skromnymi pomocnikami. Dokładamy wszelkich starań, aby nasze rośliny ozdobne były nie tylko piękne, ale przede wszystkim  okazałe, zdrowe i silne. Nasza pasja do uprawy roślin jest zaraźliwa – chcemy, aby każdy, kto odwiedza naszą szkółkę, poczuł tę samą radość i satysfakcję z obcowania z naturą. Zapraszamy do odwiedzenia naszej szkółki w Stramnicy, bo piękno kryje się w naturze!</p>
				<p>Jesteśmy absolwentami Uniwersytetu Technologicznego w Szczecinie. Dzięki studiom, które odbyliśmy na kierunku ogrodnictwo oraz wieloletniemu doświadczeniu w branży i współpracy z najlepszymi specjalistami w dziedzinie ogrodnictwa zapewniamy klientom fachowe doradztwo. Cały czas pogłębiamy naszą wiedzę na różnych kursach i szkoleniach, aby sprostać oczekiwaniom naszych klientów.</p>
				<p>Szkółkę tworzą wykwalifikowane osoby, które z pasją i zaangażowaniem dzielą się swoją wiedzą i doświadczeniem. Praca ta jest dla nich nie tylko zawodem, ale i największą pasją.</p>
				
			</div>
			<div class="opis-img">
				<img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600" alt="Szkółka Stramnica - O nas">
			</div>
		</div>
	</section>
</template>

<style scoped>
	.opis-container {
		padding: 50px 20px;
		text-align: center;
	}
	h2 {
		color: #2e7d32;
		margin-bottom: 30px;
	}
	.opis-text-img {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
		flex-wrap: wrap;
	}
	.opis-text {
		max-width: 600px;
		text-align: left;
	}
	.opis-text p {
		margin-bottom: 20px;
		line-height: 1.8;
	}
	.opis-img img {
		width: 100%;
		max-width: 500px;
		border-radius: 10px;
		box-shadow: 0 4px 20px rgba(0,0,0	,0.1);
	}
</style>