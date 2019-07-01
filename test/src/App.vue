<template>
	<div id="app">
		<div id="nav">
			<router-link 
				v-for="item in navs" 
				:key="item.to" 
				:to="item.to"
			>{{item.lable}}</router-link>
		</div>
		<v5-button>Btn</v5-button>
		<v5-swiper>
			<v5-swiper-item>h1</v5-swiper-item>
			<v5-swiper-item>h1</v5-swiper-item>
		</v5-swiper>
		<router-view/>
	</div>
</template>

<script>
import v5Button from '@ektx/v5/lib/components/button'
import V5Swiper from '@ektx/v5/lib/components/swiper'
import V5SwiperItem from '@ektx/v5/lib/components/swiperItem'

export default {
	name: 'app',
	components: {
		v5Button,
		V5Swiper,
		V5SwiperItem
	},
	data () {
		return {
			navs: [
				{
					lable: 'Home',
					to: '/'
				},
				{
					lable: 'About',
					to: '/about'
				}
			]
		}
	}
}
</script>


<style lang="scss" scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: .5rem;
	a {
		display: block;
		font-weight: bold;
		font-size: 0.4rem;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
