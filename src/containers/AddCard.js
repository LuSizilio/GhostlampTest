import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import '../App.css';
import 'antd/dist/antd.css';
import { Button, Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Add a new movie"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Movie Title">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the Movie Title!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Img Src">
              {getFieldDecorator('src')(<Input/>)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
    
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.dispatch(addCard(values.title,values.description,values.src))
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  render() {
    return (
      <div className="BtnAdd">
        <Button type="primary" onClick={this.showModal}>Add New Movie</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default connect()(CollectionsPage)