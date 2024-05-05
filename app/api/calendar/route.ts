export class CalendarApi {
    static async findMany(
      queryOptions?: Record<string, any>,
    ): Promise<any[]> {
      const buildOptions = buildQueryOptions(queryOptions);
      const response = await api.get(`/v1/calendars${buildOptions}`);
      // Check if response.data exists and is an array, otherwise return an empty array
      return Array.isArray(response.data) ? response.data : [];
    }
  
    static async findManyByUserId(
      userId: string,
      queryOptions?: Record<string, any>,
    ): Promise<any[]> {
      const buildOptions = buildQueryOptions(queryOptions);
      const response = await api.get(`/v1/users/user/${userId}/calendars${buildOptions}`);
      // Check if response.data exists and is an array, otherwise return an empty array
      return Array.isArray(response.data) ? response.data : [];
    }
  
    static findOne(
      calendarId: string,
      queryOptions?: Record<string, any>,
    ): Promise<any> {
      const buildOptions = buildQueryOptions(queryOptions);
  
      return api.get(`/v1/calendars/${calendarId}${buildOptions}`);
    }
  
    static createOne(values: Partial<any>): Promise<any> {
      return api.post(`/v1/calendars`, values);
    }
  
    static updateOne(
      calendarId: string,
      values: Partial<any>,
    ): Promise<any> {
      return api.patch(`/v1/calendars/${calendarId}`, values);
    }
  
    static deleteOne(calendarId: string): Promise<void> {
      return api.delete(`/v1/calendars/${calendarId}`);
    }
  
    static createOneByUserId(
      userId: string,
      values: Partial<any>,
    ): Promise<any> {
      return api.post(`/v1/users/user/${userId}/calendars`, values);
    }
  }
  
  // Inline definitions for HttpService, ApiHelper, and Calendar
  const api = {
    get: (url: string) => {
      // Mocked implementation
      console.log("GET request to:", url);
      // Return a promise, you might want to adjust this to match your actual API response handling
      return Promise.resolve({ data: {} });
    },
    post: (url: string, data: any) => {
      // Mocked implementation
      console.log("POST request to:", url, "with data:", data);
      return Promise.resolve({ data: {} });
    },
    patch: (url: string, data: any) => {
      // Mocked implementation
      console.log("PATCH request to:", url, "with data:", data);
      return Promise.resolve({ data: {} });
    },
    delete: (url: string) => {
      // Mocked implementation
      console.log("DELETE request to:", url);
      return Promise.resolve();
    },
  };
  
  const buildQueryOptions = (options?: Record<string, any>): string => {
    // Mocked implementation, you might want to adjust this based on your actual implementation
    return options ? `?${Object.entries(options).map(([key, value]) => `${key}=${value}`).join("&")}` : "";
  };
  