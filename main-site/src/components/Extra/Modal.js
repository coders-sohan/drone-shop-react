import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { FiPlayCircle } from "react-icons/fi";

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
					<button className="text-red-600 border-0 mt-1 mb-0" onClick={this.openModal}>
						<span className="text-[2.8rem]">
							<FiPlayCircle />
						</span>
					</button>
				</div>
			</div>
		);
	}
}

export default Modal;
