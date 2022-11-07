<template>
	<NavigationComp />
		<div id="hero">
			<div class="container">
				<div class="row vh-100 align-items-center">
					<div class="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
						<!-- <img src="@/assets/img/hero.png" alt=""> -->
					</div>
					<div class="col-12 col-sm-12 col-md-12 col-lg-6">
						<div class="text-center">
							<h1 class="text-dela-gothic-one text-uppercase m-0 hero-line-1 glitch" data-text="Meet The">Meet The</h1>
							<h1 class="text-dela-gothic-one text-uppercase m-0 hero-line-2 text-red glitch" data-text="Pilots">Pilots</h1>
						</div>
	
						<div class="text-center text-sm-center text-md-start">
							<a href="#faction" class="btn btn-black btn-lg">Check Factions <span class="fa fa-chevron-down"></span></a>
						</div>
						<!-- <p class="hero-description px-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure beatae, est voluptatem ratione distinctio fugiat!</p> -->
					</div>
				</div>
			</div>
		</div>
	
		<div id="about">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-12 col-sm-12 col-md-12 col-lg-4 text-center">
						<img src="@/assets/img/about-characters.png" alt="">
					</div>
					<div class="col-12 col-sm-12 col-md-12 col-lg-8">
						<h1 class="heading-1 text-red text-uppercase m-0">Wait is</h1>
						<h1 class="heading-1 text-white text-uppercase m-0">Taiyo Pilots</h1>
						<h1 class="heading-1 text-red text-uppercase m-0">About?</h1>
						<p class="m-0">Taiyo Pilots are a community-driven and lore-driven NFT project and are introduced as an extension to the Taiyo Robotics Universe. Pilots are set in an era before plagued monsters invaded and follows 4 factions through life in Lunar City. Pilots utility will be a very unique form of social staking that allows you to get Graphite opportunities, access to the Taiyo incubator launches in the form of whitelist spot. Taiyo pilots will give IP ownership to the holder of the NFT to allow them to create their own lore/journey.</p>
					</div>
				</div>
	
				<div class="row my-5">
					<div class="col-12">
						<hr>
					</div>
				</div>
			</div>
		</div>
	
		<div id="faction">
			<div class="container">
				<div class="row">
					<div class="col-12 text-center">
						<h1 class="heading-1 text-red text-uppercase m-0 glitch" data-text="FACTIONS">Factions</h1>
					</div>
					<div class="col-12 my-4">
	
						<div class="d-flex align-items-center justify-content-center w-100">
							<ul class="nav nav-pills mb-3 mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
								<li class="nav-item" role="presentation">
									<button class="active btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-operators-tab" data-bs-toggle="pill" data-bs-target="#pills-operators" type="button" role="tab" aria-controls="pills-operators" aria-selected="true">Operators</button>
								</li>
								<li class="nav-item ms-3 mb-3" role="presentation">
									<button class=" btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-enforcers-tab" data-bs-toggle="pill" data-bs-target="#pills-enforcers" type="button" role="tab" aria-controls="pills-enforcers" aria-selected="false">Enforcers</button>
								</li>
								<li class="nav-item ms-3 mb-3" role="presentation">
									<button class=" btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-rebels-tab" data-bs-toggle="pill" data-bs-target="#pills-rebels" type="button" role="tab" aria-controls="pills-rebels" aria-selected="false">Rebels</button>
								</li>
								<li class="nav-item ms-3 mb-3" role="presentation">
									<button class=" btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-resistance-tab" data-bs-toggle="pill" data-bs-target="#pills-resistance" type="button" role="tab" aria-controls="pills-resistance" aria-selected="false">Resistance</button>
								</li>
							</ul>
						</div>
						
						<div class="tab-content" id="pills-tabContent">
	
	
							<div class="tab-pane fade show active" id="pills-operators" role="tabpanel" aria-labelledby="pills-operators-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Operators</h1>
		
											<p>Operators are licensed controllers of Mecha Suits. They guard Lunar City from outside invaders and protect the citizens from danger.</p>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img"  :style="{'background-image': `url(${require('@/assets/img/display/operator-1.jpeg')})`}"></div>
									</div>
									
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/operator-2.jpeg')})`}"></div>
									</div>
								</div>
	
	
							</div>
	
							
							<div class="tab-pane fade" id="pills-enforcers" role="tabpanel" aria-labelledby="pills-enforcers-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Enforcers</h1>
		
											<p>Enforcers are people who bring law and order to the citizens of Lunar. Disliked by many or just misunderstood, there's no doubt Enforcers play a crucial role in stopping chaos around the City.
											</p>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
									
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/enforcer-1.png')})`}"></div>
									</div>
									
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img"  :style="{'background-image': `url(${require('@/assets/img/display/enforcer-2.png')})`}"></div>
									</div>
								</div>
	
								
							</div>
	
	
							<div class="tab-pane fade" id="pills-rebels" role="tabpanel" aria-labelledby="pills-rebels-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Rebels</h1>
		
											<p>Rebels are the miss-fits of Lunar City; generally harmless; they are known to cause trouble and not follow the rules. Some even try to steal Operators suits and take them for joy rides around town.</p>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/rebel-1.jpeg')})`}"></div>
									</div>
									
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/rebel-2.jpeg')})`}"></div>
									</div>
								</div>
	
								
							</div>
	
	
							<div class="tab-pane fade" id="pills-resistance" role="tabpanel" aria-labelledby="pills-resistance-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Resistance</h1>
		
											<p>Resistance members are a group of underground people hell-bent on exposing the corruption going on in Lunar City. They hate Enforcers with a passion, and most are willing to die for their cause.</p>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-6 col-sm-6 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/resist-1.jpeg')})`}"></div>
									</div>
									
									<div class="col-6 col-sm-12 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/resist-2.png')})`}"></div>
									</div>
								</div>
	
								
							</div>
						</div>
					</div>
				</div>
	
				<div class="row my-5">
					<div class="col-12">
						<hr>
					</div>
				</div>
			</div>
		</div>
	
		<div id="mint">
			<div class="container">
				<div class="row">
					<div class="col-12 text-center">
						<h1 class="heading-1 text-red text-uppercase m-0 glitch" data-text="MINT INFO">Mint Info</h1>
					</div>
					<div class="col-12 my-4">
	
						<div class="d-flex align-items-center justify-content-center w-100">
							<ul class="nav nav-pills mb-3 mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
								<li class="nav-item" role="presentation">
									<button class="active btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-details-tab" data-bs-toggle="pill" data-bs-target="#pills-details" type="button" role="tab" aria-controls="pills-details" aria-selected="true">Mint Details</button>
								</li>
								<li class="nav-item ms-3 mb-3" role="presentation">
									<button class=" btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-oil-tab" data-bs-toggle="pill" data-bs-target="#pills-oil" type="button" role="tab" aria-controls="pills-oil" aria-selected="false">Oil</button>
								</li>
								<li class="nav-item ms-3 mb-3" role="presentation">
									<button class=" btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-passes-tab" data-bs-toggle="pill" data-bs-target="#pills-passes" type="button" role="tab" aria-controls="pills-passes" aria-selected="false">Mint Passes</button>
								</li>
								<li class="nav-item ms-3 mb-3" role="presentation">
									<button class=" btn btn-outline-white text-uppercase fw-bold btn-sm" id="pills-breakdown-tab" data-bs-toggle="pill" data-bs-target="#pills-breakdown" type="button" role="tab" aria-controls="pills-breakdown" aria-selected="false">Supply Breakdown</button>
								</li>
							</ul>
						</div>
						
						<div class="tab-content" id="pills-tabContent">
	
	
							<div class="tab-pane fade show active" id="pills-details" role="tabpanel" aria-labelledby="pills-details-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Mint Details</h1>
	
											<div class="text-start mt-5">
												<table class="table table-borderless">
													<tr>
														<td class="text-white">Total Supply</td>
														<td class="text-white">12,500</td>
													</tr>
													<tr>
														<td class="text-white">Mint Start</td>
														<td class="text-white">TBA</td>
													</tr>
												</table>
											</div>
										</div>
									</div>
								</div>
	
							</div>
	
							
							<div class="tab-pane fade" id="pills-oil" role="tabpanel" aria-labelledby="pills-oil-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Oil</h1>
		
											<p>Oil guarantees you a Pilot airdrop on the day of mint, the airdrop depends on the "Litre" attribute on the Oil can.</p>
	
											<p>10L Oil NFT's were airdropped to Taiyo GEN1 Holders, but have not been airdropped to Infant holders yet; so there's still time to receive the 5L Can and get in on the snapshot. </p>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
									
									<div class="col-12 col-sm-12 col-md-4 col-lg-3">
										<div class="nft-img" :style="{'background-image': `url(${require('@/assets/img/display/oil-5.png')})`}"></div>
										<div class="text-center">
											<h5 class="text-dela-gothic-one m-0 text-uppercase">
												5 Liters
											</h5>
											<p class="text-dela-gothic-one m-0 text-uppercase">
												=
											</p>
											<p class="text-dela-gothic-one m-0 text-uppercase">
												1 Airdrops
											</p>
										</div>
									</div>
									
									<div class="col-12 col-sm-12 col-md-4 col-lg-3">
										<div class="nft-img"  :style="{'background-image': `url(${require('@/assets/img/display/oil-10.png')})`}"></div>
											<div class="text-center">
												<h5 class="text-dela-gothic-one m-0 text-uppercase">
													10 Liters
												</h5>
												<p class="text-dela-gothic-one m-0 text-uppercase">
													=
												</p>
												<p class="text-dela-gothic-one m-0 text-uppercase">
													2 Airdrops
												</p>
											</div>
										</div>
									
										<div class="col-12 col-sm-12 col-md-4 col-lg-3">
											<div class="nft-img"  :style="{'background-image': `url(${require('@/assets/img/display/oil-20.png')})`}"></div>
											<div class="text-center">
												<h5 class="text-dela-gothic-one m-0 text-uppercase">
													20 Liters
												</h5>
												<p class="text-dela-gothic-one m-0 text-uppercase">
													=
												</p>
												<p class="text-dela-gothic-one m-0 text-uppercase">
													4 Airdrops
												</p>
											</div>
										</div>
									</div>
	
	
									<div class="row mt-5">
										<div class="row justify-content-center">
											<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
												<h1 class="heading-2 text-white text-uppercase mb-4">Purchase at</h1>
												<a href="https://solport.io/collection/taiyooil" target="_blank" class="mb-3 btn btn-black border-0 text-uppercase">Solport.io</a>
												<a href="https://opensea.io/collection/taiyo-oil" target="_blank" class="mb-3 btn btn-black border-0 text-uppercase">Opeansea.io</a>
												<a href="https://magiceden.io/marketplace/taiyooil" target="_blank" class="mb-3 btn btn-black border-0 text-uppercase">MagicEden.io</a>
											</div>
										</div>
									</div>
	
								
								</div>
	
	
								<div class="tab-pane fade" id="pills-passes" role="tabpanel" aria-labelledby="pills-passes-tab">
									<div class="row">
										<div class="row justify-content-center">
											<div class="col-12 col-sm-12 col-md-7 text-center">
												<h1 class="heading-2 text-white text-uppercase m-0">Mint Passes</h1>
			
												<p>Mint passes are pre-mint guarantees paid for in Taiyo's Native token $SCRAP, there is currently 5000 guarantee passes for sale buyable now.</p>
												<p>They cost 250 $SCRAP.</p>
												<p>We plan to decrease the amount mint-able in $SCRAP closer to the sell out date, anything not sold out will go into the SOL mint portion. </p>
												<p>These passes get you a guarantee free mint on the day of the mint. </p>
												<p>Please make sure to read the "HOW IT WORKS?" section on the site before purchasing. </p>
											</div>
										</div>
									</div>
		
									<div class="row mt-5">
										<div class="row justify-content-center">
											<div class="col-12 col-sm-12 col-md-7 text-center">
												<a href="https://mintpass.taiyorobotics.com/" target="_blank" class="btn btn-black border-0 text-uppercase">Mint Pass</a>
											</div>
										</div>
									</div>
		
									<div class="row justify-content-center mt-5">
										<div class="col-12 col-sm-12 col-md-7 text-center">
											<h1 class="heading-2 text-white text-uppercase m-0">Buy/Swap for $SCRAP</h1>
										</div>
									</div>
		
									<div class="row justify-content-center mt-5">
										<div class="col-12 col-sm-12 col-md-7 text-center">
											<a href="https://jup.ag/swap/SOL-SCRAP" target="_blank" class="mb-3 btn btn-black border-0 text-uppercase">Jupiter</a>
											<a href="https://trade.dexlab.space/#/market/GqC1DJ3xhVnYdAETnBRRYF3Aynhz351dZaefquAxQsxR" target="_blank" class="mb-3 btn btn-black border-0 text-uppercase">DexLabs</a>
											<a href="https://raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=6naWDMGNWwqffJnnXFLBCLaYu1y5U9Rohe5wwJPHvf1p" target="_blank" class="mb-3 btn btn-black border-0 text-uppercase">Raydium</a>
										</div>
									</div>
		
									
								</div>
	
	
							<div class="tab-pane fade" id="pills-breakdown" role="tabpanel" aria-labelledby="pills-breakdown-tab">
	
	
								<div class="row">
									<div class="row justify-content-center">
										<div class="col-12 col-sm-12 col-md-7 text-center mb-5">
											<h1 class="heading-2 text-white text-uppercase m-0">Supply Breakdown</h1>
										</div>
									</div>
								</div>
								<div class="row justify-content-center">
									<div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4">
										<div class="card h-100">
											<div class="card-body">
												<div class="text-center">
													<h1 class="heading-2 text-red text-uppercase m-0">5784</h1>
													<p class="text-black mt-3">Airdropped to Oil holders.</p>
												</div>
	
											</div>
										</div>
									</div>
									<div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4">
										<div class="card h-100">
											<div class="card-body">
												<div class="text-center">
													<h1 class="heading-2 text-red text-uppercase m-0">5000</h1>
													<p class="text-black mt-3">Mint passes for 250 $SCRAP each (subject to decreases see <strong>Mint Passes</strong> Tab)</p>
												</div>
	
											</div>
										</div>
									</div>
									<div class="col-12 col-sm-12 col-md-12 col-lg-4 mb-4">
										<div class="card h-100">
											<div class="card-body">
												<div class="text-center">
													<h1 class="heading-2 text-red text-uppercase m-0">1716</h1>
													<p class="text-black mt-3">Minted in <strong>$SOL</strong> based on average price of <strong>$SCRAP</strong> logged each day.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
	
								
							</div>
						</div>
					</div>
				</div>
	
				<div class="row my-5">
					<div class="col-12">
						<hr>
					</div>
				</div>
			</div>
		</div>
	
		<div id="faq">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<p class="text-uppercase m-0">What you need to know</p>
						<h1 class="text-dela-gothic-one heading-1 m-0 text-uppercase"><span class="text-red heading-1">F</span>requently</h1>
						<h1 class="text-dela-gothic-one heading-1 m-0 text-uppercase"><span class="text-red heading-1">A</span>sked</h1>
						<h1 class="text-dela-gothic-one heading-1 m-0 text-uppercase"><span class="text-red heading-1">Q</span>uestions</h1>
					</div>
				</div>
			</div>
	
			<div class="container pb-5">
				<div class="row align-items-center">
					<div class="col-12">
						<div class="accordion accordion-flush" id="accordionFlushExample">
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingOne">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
										Accordion Item #1
									</button>
								</h2>
								<div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingTwo">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
										Accordion Item #2
									</button>
								</h2>
								<div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="flush-headingThree">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
										Accordion Item #3
									</button>
								</h2>
								<div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
									<div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</template>
	
	<script>
	
	export default {
		name: 'HomePage',
	}
	</script>
	
	<style>
	
	</style>