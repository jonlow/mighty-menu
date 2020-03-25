import styled from 'styled-components';
import { device } from '../../utils/breakpoints.js'

export const ContentWrapper = styled.div`
	border: 1px dashed teal;

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 22px;

		@media ${device.desktop} {
			margin-bottom: 37px;
		}
	}

	h1 {
		font-size: 42px;
		@media ${device.desktop} {
			font-size: 80px;
		}
	}

	h2 {
		font-size: 36px;
		@media ${device.desktop} {
			font-size: 60px;
		}
	}

	h3 {
		font-size: 32px;
		@media ${device.desktop} {
			font-size: 48px;
		}
	}

	h4 {
		font-size: 28px;
		@media ${device.desktop} {
			font-size: 36px;
		}
	}

	h5 {
		font-size: 24px;
		@media ${device.desktop} {
			font-size: 30px;
		}
	}

	h6 {
		font-size: 20px;
		@media ${device.desktop} {
			font-size: 26px;
		}
	}

	p {
		font-size: 18px;
		margin-bottom: 25px;
		@media ${device.desktop} {
			font-size: 20px;
			margin-bottom: 35px;
		}

		&:first-of-type {
			color: #474e50;
		}

		a {
			display: inline-block;
			position: relative;
			color: ${props => props.theme.linkColor};
			font-weight: 600;
			::after {
				content: '';
				position: absolute;
				bottom: 1px;
				left: 0;
				width: 100%;
				height: 2px;
				background-color: ${props => props.theme.linkColor};
				opacity: 0;
				transition: 90ms;
			}

			:hover {
				::after {
					opacity: 1;
				}
			}
		}
	}

	ul {
		margin-left: 25px;
		margin-bottom: 25px;

		@media ${device.desktop} {
			margin-left: 30px;
			margin-bottom: 35px;
		}

		li {
			list-style-type: none;
			position: relative;
			font-size: 18px;
			margin-bottom: 18px;

			@media ${device.desktop} {
				font-size: 20px;
				margin-bottom: 20px;
			}

			::before {
				content: '';
				height: 8px;
				width: 8px;
				background-color: ${props => props.theme.primaryColor};
				display: block;
				border-radius: 50%;
				position: absolute;
				top: 10px;
				left: -25px;

				@media ${device.desktop} {
					top: 12px;
					font-size: 20px;
					left: -30px;
				}
			}
		}
	}
	
`;