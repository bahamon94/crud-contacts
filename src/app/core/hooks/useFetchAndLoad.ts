import {AxiosCall} from "../models"
import {AxiosResponse} from "axios"
import {useEffect, useState} from "react"

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  let controller : AbortController

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true)

    let response = {} as AxiosResponse<any>

    try {
      response = await axiosCall.call;
    } catch (err: any) {
      setLoading(false)
      throw err;
    }

    setLoading(false)
    return response
  }


  const cancelEnpoint = () => {
    setLoading(false)
    controller && controller.abort()
  }

  useEffect(() => {
    return () => {
      cancelEnpoint()
    };
  }, []);

  return { loading, callEndpoint }

}

export default useFetchAndLoad



