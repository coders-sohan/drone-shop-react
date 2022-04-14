import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

export class Modal extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}
	render() {
		return (
			<div>
				<div>
					<ModalVideo
						channel="youtube"
						isOpen={this.state.isOpen}
						videoId="ZS95Z4z-z4M"
						onClose={() => this.setState({ isOpen: false })}
					/>
					<button
						className="text-lg capitalize px-6 py-2 border rounded-md text-white bg-gray-900 border-gray-900 lg:ml-3 ml-0 lg:mt-0 mt-3"
						onClick={this.openModal}
					>
						Watch videos
					</button>
				</div>
			</div>
		);
	}
}

export default Modal;
