import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'
import { css } from 'glamor'

import {
  Heading,
  Text,
  Input,
  Button,
  useToast
} from '@chakra-ui/core'

import ContentWrapper from '../components/ContentWrapper'
import Navbar from '../components/Navbar'

const SlackPage = props => {
  const [email, setEmail] = useState('')
  const toast = useToast()

  const styles = {
    form: css({
      padding: '16px 0',

      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'no-wrap',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }),
    submitButton: css({
      marginLeft: '14px'
    })
  }

  const sendInvite = async () => {
    try {
      fetch('/api/slack/getInvitation', {
        method: 'POST',
        headers: {
          via: 'Seia-Soto; comduck-web',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })

      toast({
        title: 'Slack 초대장 발송됨',
        description: 'Slack 초대장이 입력하신 이메일로 전송되었습니다! 메일함에 없다면 스팸 메일을 확인해주세요.',
        status: 'success',
        duration: 5 * 1000,
        isClosable: true
      })
    } catch (error) {
      toast({
        title: 'Slack 초대장 발송 실패',
        description: 'Slack 초대장을 하는 중에 실패했습니다. 잘못된 경로에서 접근하고 있는지 확인해보세요.',
        status: 'fail',
        duration: 5 * 1000,
        isClosable: true
      })
    }
  }

  return (
    <>
      <Navbar />
      <ContentWrapper>
        <Heading size='lg'>
          Slack 초대장 받기
        </Heading>
        <Text fontSize='md'>
          Slack 초대장을 받을 이메일 주소를 입력해 주세요.
        </Text>
        <div {...styles.form}>
          <Input
            variant='outline'
            placeholder='someone@domain.tld'
            type='email'
            value={email}
            onChange={e => {
              if (Number(e.keyCode) === 13) {
                sendInvite()
              } else {
                setEmail(e.target.value)
              }
            }}
          />
          <Button
            variant='solid'
            variantColor='teal'
            onClick={sendInvite}
            {...styles.submitButton}
          >
            보내기
          </Button>
        </div>
      </ContentWrapper>
    </>
  )
}

export default SlackPage
