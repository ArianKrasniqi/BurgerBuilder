import React, { Component, useEffect } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null }); //Only to clear the erron when the request is sent
                return request;
            });
            this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });

            this.state = {
                error: null
            }
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        errorConfirmedHandle = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Auxiliary>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandle}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent />
                </Auxiliary >
            );
        }
    }
};

export default withErrorHandler;